const createExcerpt = (inputString: string): string => {
    if (inputString.length > 50) {
        const truncatedString: string = inputString.substring(0, 50);
        return truncatedString + "...";
    } else {
        return inputString;
    }
};

export default createExcerpt;