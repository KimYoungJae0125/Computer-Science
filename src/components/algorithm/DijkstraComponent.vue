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
  'A로부터 갈 수 있는 임의의 노드 B에 대해, d[A] + P[A][B]와 d[B]의 값 비교, 초기에는 INF 값이기 때문에 무조건 전자가 적다.',
  'd[B]의 값보다 d[A] + p[A][B]가 작으면 값을 갱신한다.',
  'A의 모든 인접 노드들에 대해 이 작업을 수행한다.',
  'A의 상태는 방문 완료로 변경하여 더 이상 방문하지 않게 한다.',
  '미방문 상태인 노드들 중 출발점으로부터 거리가 제일 짧은 노드 하나를 선택해 그 노드를 A에 저장한다.',
  '도착 노드가 방문 완료가 되었거나 또는 더 이상 방문할 노드가 없을 떄까지 위의 과정을 반복하면, 최종적으로 모든 노드들의 최단 거리가 구해진다.'
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

