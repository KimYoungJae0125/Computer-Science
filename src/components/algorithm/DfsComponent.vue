<template>
    <div>
        <h2>{{ title }}</h2>
        <DescriptionComponent title="기본 개념" :descriptions="descriptions" />
    </div>
</template>

<script>
import DescriptionComponent from '../DescriptionComponent.vue';

const descriptions = [
  '최대한 깊이 내려간 뒤, 더 이상 깊이 갈 곳이 없을 경우 옆으로 이동한다.',
  '즉, 시작 노드에서 다음 분기로 넘어가기 전까지 해당 분기를 완벽하게 탐색하는 방식',
  'Stack 자료구조 또는 재귀를 이용하여 구현한다.'
];

export default {
    name: 'DfsComponent',
    components: {
        DescriptionComponent
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

