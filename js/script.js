var pippo = new Vue(
  {
    el: '#vue1',
    data: {
      imageIndex: 0,
      images: [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg',
        'img/img5.jpg',
      ],
    },
    methods: {
      nextImage: function() {
        this.imageIndex++;
        if (this.imageIndex == this.images.length) {
          this.imageIndex = 0;
        }
      },
      prevImage: function() {
        this.imageIndex--;
        if (this.imageIndex == -1) {
          this.imageIndex = this.images.length -1;
        }
      }
    }
  },
);
