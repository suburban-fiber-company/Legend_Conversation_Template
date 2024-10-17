import { ref } from "vue";

export const useStage = (limit: number) => {
    const stage = ref(1);

    const nextStage = (condition = true) => {
        if (stage.value >= limit) return;
        if (condition) stage.value += 1
    }

    const prevStage = (condition = true) => {
        if (stage.value <= 1) return;
        if (condition) stage.value -= 1
    }

    return { stage, prevStage, nextStage }


}