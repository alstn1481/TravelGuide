document.addEventListener("DOMContentLoaded", ()=>{
    const slide = document.getElementById("slide");
    
    const toDown = () => {
        slide.style.top = '0';
        slide.style.transition = 'top 0.5s';

        setTimeout(() => {
            zz()
        }, 500);

    };

    const zz = () => {
        slide.style.top = '-300px';
        slide.style.transition = 'none';
        slide.prepend( slide.children[2]);
    };

    setInterval(() => {
        toDown()
    }, 2500);



    /***************************************************/
    const notice_li = document.querySelectorAll("#notice li:not(:first-child)");
    const black = document.getElementById("black");
    const pop_btn = document.querySelector("#popup button");

/*     const popup = ( i ) => {
        if ( i == "닫기") {
            black.style.display = 'none'
        } else {
            black.style.display = 'block'
        };
    };





    notice_li.forEach( i => {
        i.children[0].addEventListener("click", popup);
    });

    pop_btn.addEventListener("click", ()=> { popup("닫기") }); */
    /***************************************************/

    const open = () => { 
        black.style.display = "block";
        popup = false;
    }
    const close = () => { 
        black.style.display = "none";
        popup = true;
    }

    let popup = true;
    const arr = [pop_btn];

    let combinedArray = [...notice_li, pop_btn];
    /* let combinedArray = notice_li.concat(arr); */

    
    combinedArray.forEach( i => {
        i.addEventListener("click" , ()=> {
            popup ? open() : close();
        });
    })







});///////////////////////전체 끝