export const convertPlantNameToImageDir = (name) => {
    return name
        .replace(/[^\w\s]|_/g, "") // removes everything except alphanumeric characters
        .replace(/\s+/g, " ") // removes whitespaces
        .toLowerCase()
        .split(' ')
        .join('');
}