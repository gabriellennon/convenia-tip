<script setup lang="ts">
    import Skeleton from 'primevue/skeleton';
</script>

<template>
    <div class="c-tip_c_infos">
        <div class="c-tip_config">
            <Skeleton width="8rem" height="3rem"></Skeleton>
            <Skeleton width="12rem" height="2rem"></Skeleton>
            <Skeleton width="25rem" height="2rem"></Skeleton>
            <Skeleton width="25rem" height="2rem"></Skeleton>
        </div>
        <div class="c-tip_info">
            <div class="c-tip-info_c_values_loading">
                <Skeleton width="10rem" height="2rem"></Skeleton>
                <Skeleton width="8rem" height="2rem"></Skeleton>
            </div>
            <div class="c-tip-info_c_values_loading">
                <Skeleton width="10rem" height="2rem"></Skeleton>
                <Skeleton width="8rem" height="2rem"></Skeleton>
            </div>
            <div class="c-tip-info_c_values_loading">
                <Skeleton width="10rem" height="2rem"></Skeleton>
                <Skeleton width="8rem" height="2rem"></Skeleton>
            </div>
            <div class="c-tip-info_c_values_loading">
                <Skeleton width="10rem" height="2rem"></Skeleton>
                <Skeleton width="8rem" height="2rem"></Skeleton>
            </div>
            <div class="c-tip-info_c_values_loading">
                <Skeleton width="10rem" height="2rem"></Skeleton>
                <Skeleton width="8rem" height="2rem"></Skeleton>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .c-tip-info_c_values_loading {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        margin-bottom: 0.5rem;
    }
</style>
