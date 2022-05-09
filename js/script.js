const app = new Vue (
    {
        el : '#root',
        data : {
            countries: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
                },
            ],
            currentSlide: 0

        },
        methods : {
            prevSlide(){
                if (this.currentSlide == 0) {
                    this.currentSlide = this.countries.length - 1;
                } else {
                    this.currentSlide--;
                }
            },
            nextSlide(){
                if (this.currentSlide == this.countries.length - 1) {
                    this.currentSlide = 0;
                } else {
                    this.currentSlide++;
                }
            }
        }
    }

)