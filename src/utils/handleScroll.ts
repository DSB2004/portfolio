export const ScrollTo = (id: string) => {

    const element = document.querySelector("#" + id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    }

};

