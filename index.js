const testimonial = [

    {
        name : "John",
        photoUrl : "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        text : "I have been using apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
    },
    {
        name : "Juliet",
        photoUrl: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        text:"apple makes me more productive and gets the job done in a fraction of the time. I'm glad I found apple."
    },
    {
        name : "Lorenzo",
        photoUrl : "https://images.unsplash.com/photo-1770510067230-1059f0776b3a?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        text : "I have tried a lot of similar products and apple is the best!"
    }

];

var index = 0;

const usernameEl = document.querySelector(".username");

const textEl = document.querySelector(".text");

const imageEl = document.querySelector("img");

function updateTestimonial()
{

    const {name,photoUrl,text} = testimonial[index];

    usernameEl.innerHTML = name;

    textEl.innerHTML = text;

    imageEl.src = `${photoUrl}`;

    index = (index+1)%testimonial.length;
}

setInterval(updateTestimonial,10000);