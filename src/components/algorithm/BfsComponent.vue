<template>
    <div>
        <H2TitleComponent :title="title" />
        <DescriptionComponent title="기본 개념" :descriptions="descriptions" />
    </div>
</template>

<script>
import DescriptionComponent from '../DescriptionComponent.vue';
import H2TitleComponent from '../H2TitleComponent.vue';

const descriptions = [
  '같은 층을 모두 검색한 다음, 더 이상 갈 수 없으면 다음 층으로 이동',
  '즉, 시작 노드가 존재하는 모든 층의 노드를 검색 한 후 다음 층으로 검색하여 탐색하는 방식',
  'Queue 자료구조를 이용하여 구현한다.'
];


export default {
    name: 'BfsComponent',
    components: {
        DescriptionComponent,
        H2TitleComponent
    },
    props: {
        title: String,
    },
    data: () => {
        return {
            descriptions
        }
    }
}

</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

