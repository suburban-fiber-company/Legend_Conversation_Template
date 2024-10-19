import { ref, watch } from "vue";

export const useStage = (limit: number, onChange?: Function) => {
    const stage = ref(1);

    const nextStage = (condition = true) => {
        if (stage.value >= limit) return;
        if (condition) stage.value += 1
    }

    const prevStage = (condition = true) => {
        if (stage.value <= 1) return;
        if (condition) stage.value -= 1
    }

    watch([stage], () => onChange && onChange())

    return { stage, prevStage, nextStage }


}