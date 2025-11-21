    <template>
        <ContainerPage :title="title">
            <template #context>
                <Divider class="ubi-divider" align="center">
                    <p class="font-title">{{ props.titleubi }}</p>
                </Divider>   
                <DivContainer>
                    <template #frame>
                        <div>
                            <Frame :frame="img[0]" class="img-left" />
                        </div>
                    </template>
                    <template #text>
                        <div>
                            <div>
                                <p class="font-paragraph">{{ props.ubi }}</p>
                            </div>
                        </div>
                    </template>
                </DivContainer>
                <Divider align="center">
                    <p class="font-title title-paragraph">{{ props.titlelimits }}</p>
                </Divider>      
                <DivContainer style="margin-bottom: 2rem;" :reverse="true">
                    <template #frame>
                        <div>
                            <Frame :frame="img[1]" class="img-right" />
                            <Frame :frame="img[2]" class="img-left" />
                            <Frame :frame="img[3]" class="img-right" />
                        </div>
                    </template>
                    <template #text>
                        <div>
                            <Timeline :value="props.data" align="alternate">

                                <template #content="slotProps">
                                    <p class="font-title">{{ slotProps.item.title }}</p>
                                    <p class="font-paragraph">{{ slotProps.item.data }}</p>
                                </template>
                            </Timeline>

                        </div>
                    </template>
                </DivContainer>
                <Divider align="center">
                    <p class="font-title title-paragraph">{{ props.titleactivities }}</p>
                </Divider>
                <DivContainer v-if="props.titleactivities != null">
                    <template #frame>
                        <div>
                            <Frame :frame="img[4]" class="img-left" />
                        </div>
                    </template>
                    <template #text>
                        <div>
                            <div>
                                <p class="font-paragraph title-paragraph">{{props.dataactivities}}</p>
                            </div>
                        </div>
                    </template>
                </DivContainer>
                <Divider align="center">
                    <p class="font-title title-paragraph">{{ $t('label.label1') }}</p>
                </Divider>
                <ButtonOption :label="$t('button.label2')" :fun="props.fun"/>
            </template>
        </ContainerPage>
    </template>

    <script setup>

    import ButtonOption from '@/components/ButtonOption.vue';
    import Divider from 'primevue/divider'
    import Frame from '@/components/Frame.vue';
    import ContainerPage from '@/components/ContainerPage.vue';
    import DivContainer from '@/components/DivContainer.vue';
    import Timeline from 'primevue/timeline';

    const icons = [
        "pi pi-arrow-circle-up",
        "pi pi-arrow-circle-down",
        "pi pi-arrow-circle-right",
        "pi pi-arrow-circle-left"
    ]

    const props = defineProps({
        title: String,
        data: {
            type: Array,
            required: true
        },
        img: {
            type: Array,
            required: true
        },
        titlelimits: String,
        titleubi: String,
        ubi: String,
        fun: {
            type: Function
        },
        titleactivities: String, 
        dataactivities: String

    });



    </script>

    <style scoped>

    .container-limits{
        display: flex;
        justify-content: center;
        
    }

    .title-paragraph{
        margin: 0%;
    }

    :deep(.p-divider){
        color: black !important;
    }

    :deep(.p-divider-content) {
        color: black !important;  
    }

    .ubi-divider{
        margin-top: -2rem;
    }

    </style>