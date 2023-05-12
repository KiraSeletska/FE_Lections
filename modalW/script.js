const btns = document.querySelectorAll(".open-modal");

for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.addEventListener("click", (evt) => {
        let target = evt.target;
        while (target !== btn) {
            target = target.parentNode;
        }

        const roles = target.getAttribute("role").split(" ");
        roles.forEach(role => {
            const modal = document.querySelector(`.modal[modal-id="${role}"]`);
            modal.classList.add("open");
        });
    });
}

const closeBtns = document.querySelectorAll(".modal_close");
for (let i = 0; i < closeBtns.length; i++) {
    const closeBtn = closeBtns[i];
    closeBtn.addEventListener("click", (evt) => {
        let target = evt.target;
        while (!target.classList.contains("modal")) {
            target = target.parentNode;
        }
        
        target.classList.remove("open");
    });
}


document.body.addEventListener("click", (evt) => {
    let target = evt.target;
    while (target !== document.body) {
        if (
            target.classList.contains("open-modal") || 
            target.classList.contains("modal_content")
        ) {
            return;
        }
        target = target.parentNode;
    }
    const modal = document.querySelector(".modal.open");
    modal.classList.remove("open");
});

document.body.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
        const modal = document.querySelector(".modal.open");
        modal.classList.remove("open");
    }
});