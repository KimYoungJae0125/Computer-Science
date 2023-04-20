<template>
    <div>
        <DescriptionComponent title="기본 개념" :descriptions="descriptions" />
        <div>
            <CodeBlockComponet title="예시 코드" :codes="codes" />
        </div>
    </div>
</template>

<script>
import DescriptionComponent from '@/components/DescriptionComponent.vue';
import CodeBlockComponet from '@/components/basic/CodeBlockComponet.vue';

const descriptions = [
    '자기 자신을 호출하는 자료구조',
    '자신의 로직을 내부적으로 반복하다가, 일정한 조건이 만족 되면 함수를 이탈하여 결과를 도출',
    '재귀 호출을 너무 많이 하게 되면 스택 메모리 영역에 너무 많은 공간을 할당하게 되어 스택 오버플로우가 발생 가능',
    '기본적으로, 함수가 호출 될 때 공간이 할당되고 해당 함수가 종료 될 때 해제 되는 메모리 영역을 Call Stack으로 나타냄',
    '함수가 호출 될 때마다, Call Stack에 메모리가 할당되며(스택 프레임) 재귀 호출이 종료되는 시점에서 순서대로 함수를 실행',
]

const codes = [
    'function recursive() {',
    '  call(0);',
    '}',
    'function call(index) {',
    '  if(index == 10) {',
    '      return;',
    '  }',
    '  call(++index);',
    '  console.log(index);',
    '}',
]

export default {
    name: 'RecursiveComponent',
    components: {
        DescriptionComponent,
        CodeBlockComponet
    },
    data: () => {
        return {
            descriptions,
            codes
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