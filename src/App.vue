<script  setup lang="ts">
  import SelectButton from 'primevue/selectbutton';
  import InputNumber from 'primevue/inputnumber';
  import Slider from 'primevue/slider';
  import Button from 'primevue/button';
  import gql from 'graphql-tag';
  import { useQuery } from '@vue/apollo-composable'
  import type { CurrencyConversion } from '@/utils/types'

  import { ref, computed, onMounted, watchEffect } from 'vue';

  const totalTip = computed(() => {
    return inputValueCheck.value * (inputValueTip.value / 100);
  });

  const totalCheck = computed(() => {
    return inputValueCheck.value + totalTip.value;
  });

  const valuePerPerson = computed(() => {
    return totalCheck.value / inputValuePeople.value;
  });

  const showConfigContent = ref(true);

  const toggleShowConfigContent = () => {
    showConfigContent.value = !showConfigContent.value;
  };

  const ALL_CURRENCY_CODES = gql`
    query GetCurrencyConversion ($baseCurrency: String! $convertCurrencies: [String]!) {
      currencyConversion (baseCurrency: $baseCurrency convertCurrencies: $convertCurrencies) {
        baseCurrencyInfo {
          code
          symbol
        }
        conversions {
          currencyInfo {
            code
            symbol
          }
          rate
          timestamp
        }
      }
    }
  `;

  const activeCoin = ref('EUR');
  const optionsCoins = ref(['EUR', 'USD']);
  const inputValueCheck = ref(0);
  const inputValueTip = ref(10);
  const inputValuePeople = ref(2);

  const { result, error, loading } = useQuery(ALL_CURRENCY_CODES,{
    baseCurrency: activeCoin, 
    convertCurrencies: [...optionsCoins.value, 'BRL']
  })

  const currency = computed<CurrencyConversion | null>(() => result.value)

  watchEffect(() => {
    // console.log(currency)
  })
</script>

<template>
  <main>
    <h1>Le/Tip</h1>
    <section class="c-tip">
      <div v-if="error">
        {{ error }}
      </div>
      <div v-if="loading">
        Loading...
      </div>
      <template v-else>
        <div class="c-tip_c_infos">
          <div class="c-tip_config" :class="{ visible: showConfigContent }">
            <SelectButton 
              v-model="activeCoin" 
              :options="optionsCoins" 
              aria-labelledby="basic" 
            />
            <div class="c-tip_account_value">
              <label 
                for="currency-us" 
                class="c-tip_label"
              > 
                Valor
              </label>
              <InputNumber 
                v-model="inputValueCheck" 
                inputId="currency-us" 
                mode="currency" 
                :currency="activeCoin" 
                locale="en-US" 
              />
            </div>
            <div class="c-tip_value">
              <div class="c-tip_value__info">
                <p class="c-tip_label"> 
                  Gorjeta:
                </p>
                <p class="c-tip-value_info_slider">{{ inputValueTip }}</p>
                <span class="c-tip_label">(%)</span>
              </div>
              <Slider
                v-model="inputValueTip" 
                :min="10"
                :max="20"
              />
            </div>
            <div class="c-tip_people">
              <div class="c-tip_value__info">
                <p class="c-tip_label"> 
                  Pessoas:
                </p>
                <p class="c-tip-value_info_slider">{{ inputValuePeople }}</p>
              </div>
              <Slider 
                v-model="inputValuePeople" 
                :min="2"
                :max="16"
              />
            </div>
          </div>
          <div class="c-tip_info" :class="{ visible: !showConfigContent }">
            <div class="c-tip-info_c_values">
              <p class="c-tip-info_c_values__text">Valor da Conta</p>
              <p class="c-tip-info_c_values__value__text"><span>$</span>{{ inputValueCheck.toFixed(2) }}</p>
            </div>
            <div class="c-tip-info_c_values">
              <p class="c-tip-info_c_values__text">Valor da Gorjeta</p>
              <p class="c-tip-info_c_values__value__text"><span>$</span>{{ totalTip.toFixed(2) }}</p>
            </div>
            <div class="c-tip-info_c_values">
              <p class="c-tip-info_c_values__text">Total da conta</p>
              <p class="c-tip-info_c_values__value__text"><span>$</span>{{ totalCheck.toFixed(2) }}</p>
            </div>
            <div class="c-tip-info_c_values">
              <p class="c-tip-info_c_values__text">Por pessoa</p>
              <p class="c-tip-info_c_values__value__text"><span>$</span>{{ valuePerPerson.toFixed(2) }}</p>
            </div>
            <div class="c-tip-info_c_values">
              <p class="c-tip-info_c_values__text">Em R$</p>
              <p class="c-tip-info_c_values__value__text"><span>R$</span>14</p>
            </div>
          </div>
  
          <Button 
            class="mobile-button" 
            :icon="showConfigContent === true ? 'pi pi-arrow-right' : 'pi pi-arrow-left'" 
            aria-label="Ver mais" 
            severity="info" 
            rounded
            @click="toggleShowConfigContent"
          ></Button>
        </div>
      </template>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  h1 {
    color: $green-500;
  }

  .c-tip {
    padding: 1.5rem;
    border: 1px solid #01b252;
    background: #FBFCFC;
    border-radius: 0.6rem;

    .c-tip_c_infos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      & .c-tip_config{
        display: flex;
        flex-direction: column;
        gap: 1rem;
  
        & .c-tip_label {
          color: #50555A;
          font-weight: 500;
          font-size: 1rem;
        }
  
        & .c-tip_value__info {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-bottom: 0.6rem;
        }
  
        & .c-tip-value_info_slider {
          font-size: 1rem;
          font-weight: 700;
          color: #3370aa;
        }
      }
  
      & .c-tip_info {
        text-align: center;
  
        .c-tip-info_c_values {
          & .c-tip-info_c_values__text {
            font-size: 1rem;
            font-weight: 500;
            color: #50555A;
          }
  
          & .c-tip-info_c_values__value__text {
            font-size: 1.2rem;
            font-weight: 700;
            color: #01b252;
            font-style: italic;
          }
        }
      }
  
      & .mobile-button {
        display: none;
      }
    }

  }

  @media (max-width: 768px) {
    .c-tip {
      padding: 1rem;
      
      .c-tip_c_infos {
        display: flex;
        overflow-x: auto;
        flex-direction: column;
        gap: 2rem;
        
        & .c-tip_config, .c-tip_info {
          flex: 0 0 100%;
          display: none;
        }
  
        .c-tip_config.visible {
          display: block;
        }
        .c-tip_info.visible {
          display: block;
        }
  
        & .mobile-button {
          display: block;
        }
      }

    }
  }
</style>
