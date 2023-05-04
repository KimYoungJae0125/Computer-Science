<template>
    <div>
        <h2>{{ title }}</h2>
        <DescriptionComponent title="기본 개념" :descriptions="descriptions" />
        <DescriptionComponent title="알고리즘 구현" :descriptions="algorithmDescriptions" />
    </div>
</template>

<script>
import DescriptionComponent from '../DescriptionComponent.vue';

const descriptions = [
  '한 정점(노드)에서 다른 정점까지의 최단 경로를 구하는 알고리즘 중 하나.',
  '경로를 구하는 과정에서 도착 정점 뿐만 아니라 모든 다른 정점까지 최단 경로로 방문하며 각 정점까지의 최단 경로를 모두 찾음',
  '매 번 최단 경로의 정점을 선택해 탐색을 반복',
  '그래프 알고리즘 중 최소 비용을 구하는 알고리즘의 종류로는 벨만-포드 알고리즘, 플로이드 워샬(Floyd Warshall) 알고리즘 등이 있음',
];

const algorithmDescriptions = [
  '출발점으로부터의 최단 거리를 저장할 배열 d[v]를 만들고, 출발 노드에는 0을, 출발점을 제외한 다른 노드들에는 매우 큰 값 INF를 채워 넣는다.',
  '현재 노드를 나타내는 변수 A에 출발 노드의 번호를 저장한다.',


];

export default {
    name: 'DijkstraComponent',
    components: {
        DescriptionComponent
    },
    props: {
        title: String,
    },
    data: () => {
        return {
            descriptions,
            algorithmDescriptions
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

