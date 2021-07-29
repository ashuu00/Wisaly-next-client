const FeaturedResponsive = {
    mobile: {
        // the naming can be any, depends on you.
        breakpoint: { max: 360, min: 0 },
        items: 2
    },
    tablet: {
        // the naming can be any, depends on you.
        breakpoint: { max: 720, min: 361 },
        items: 3
    },
    desktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 1440, min: 721 },
        items: 4,
        slidesToSlide: 2
    },
    superDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1441 },
        items: 6,
        slidesToSlide: 4
    }
};

const RecommendResponsive = {
    mobile: {
        // the naming can be any, depends on you.
        breakpoint: { max: 360, min: 0 },
        items: 1
    },
    tablet: {
        // the naming can be any, depends on you.
        breakpoint: { max: 720, min: 361 },
        items: 1
    },
    desktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 1600, min: 721 },
        items: 3,
        slidesToSlide: 1
    },
    superDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1600 },
        items: 3,
        slidesToSlide: 2
    }
};

const usersResponsive = {
    mobile: {
        // the naming can be any, depends on you.
        breakpoint: { max: 360, min: 0 },
        items: 2
    },
    tablet: {
        // the naming can be any, depends on you.
        breakpoint: { max: 720, min: 361 },
        items: 2
    },
    desktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 1600, min: 721 },
        items: 3,
        slidesToSlide: 1
    },
    superDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1600 },
        items: 4,
        slidesToSlide: 2
    }
};

const exploreItemsResponsive = {
    mobile: {
        // the naming can be any, depends on you.
        breakpoint: { max: 360, min: 0 },
        arrows: false,
        items: 1
    },
    tablet: {
        // the naming can be any, depends on you.
        breakpoint: { max: 720, min: 361 },
        arrows: false,
        items: 1
    },
    desktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 1600, min: 721 },
        items: 2,
        slidesToSlide: 1
    },
    superDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1600 },
        items: 2,
        slidesToSlide: 1
    }
};
const ProductImageShow = {
    mobile: {
        // the naming can be any, depends on you.
        breakpoint: { max: 360, min: 0 },
        items: 3
    },
    tablet: {
        // the naming can be any, depends on you.
        breakpoint: { max: 720, min: 361 },
        items: 3
    },
    desktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 1440, min: 721 },
        items: 4,
        slidesToSlide: 1
    },
    superDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1441 },
        items: 4,
        slidesToSlide: 4
    }
};

export {
    FeaturedResponsive as default,
    RecommendResponsive,
    usersResponsive,
    exploreItemsResponsive,
    ProductImageShow
};
