export const LimitWords = (text: string, limit: number) => {
    const words = text.split(" ")
    if (words.length > limit) {
        return words.slice(0, limit).join(" ") + " ...";
    } else {
        return text;
    }
}