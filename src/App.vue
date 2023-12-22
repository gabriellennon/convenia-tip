<script setup lang="ts">
  import SelectButton from 'primevue/selectbutton';
  import InputNumber from 'primevue/inputnumber';
  import Slider from 'primevue/slider';
  import InputText from 'primevue/inputtext'

  import { ref } from 'vue';

  const activeCoin = ref('EUR');
  const optionsCoins = ref(['EUR', 'USD']);
  const inputValueCheck = ref(0);
  const inputValueTip = ref(10);
  const inputValuePeople = ref(2);
</script>

<template>
  <main>
    <h1>Le/Tip</h1>
    <section class="c-tipp">
      <div class="c-tip_config">
        <SelectButton 
          v-model="activeCoin" 
          :options="optionsCoins" 
          aria-labelledby="basic" 
        />
        <div class="c-tip_account_value">
          <label 
            for="currency-us" 
            class="font-bold block mb-2"
          > 
            Valor
          </label>
          <InputNumber 
            v-model="inputValueCheck" 
            inputId="currency-us" 
            mode="currency" 
            currency="USD" 
            locale="en-US" 
          />
        </div>
        <div class="c-tip_value">
          <div>
            <p>Gorjeta</p>
            <InputNumber 
              v-model.number="inputValueTip" 
              class="w-full" 
              :min="10"
              :max="20"
            />
            <span>(%)</span>
          </div>
          <Slider 
            v-model="inputValueTip" 
            class="w-14rem" 
            :min="10"
            :max="20"
          />
        </div>
        <div class="c-tip_people">
          <div>
            <p>Pessoas</p>
            <InputNumber 
              v-model.number="inputValuePeople" 
              class="w-full" 
              :min="2"
              :max="16"
            />
          </div>
          <Slider 
            v-model="inputValuePeople" 
            class="w-14rem" 
            :min="10"
            :max="20"
          />
        </div>
      </div>
      <div class="c-tip_info">
        <div>
          <p>Conta</p>
          <p><span>$</span>14</p>
        </div>
        <div>
          <p>Gorjeta</p>
          <p><span>$</span>14</p>
        </div>
        <div>
          <p>Total</p>
          <p><span>$</span>14</p>
        </div>
        <div>
          <p>Por pessoa</p>
          <p><span>$</span>14</p>
        </div>
        <div>
          <p>Em R$</p>
          <p><span>R$</span>14</p>
        </div>
      </div>
    </section>
  </main>
</template>
