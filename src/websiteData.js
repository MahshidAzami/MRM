let data = {
  companyDetails: {
    name: "MRM",
    phone: "012345678"
  },
  navbarItems: [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Services",
      link: "/services",
      subMenu: [
        "HandyMan",
        "Electrics",
        "Home Makeover",
        "Carpentry",
        "Plumbing",
        "Moving Services",
        "Decorating",
        "Jet Washing",
        "Locksmith"
      ]
    },
    {
      name: "Prices",
      link: "/prices"
    },
    {
      name: "About Us",
      link: "/aboutUs"
    }
  ],
  landingPage: {
    banner: [
      {
        heading: "one stop home services",
        text: "let us do it for you."
      },
      {
        heading: "one click repair service",
        text: "repair. improve. maintain"
      },
      {
        heading: "Property Maintenance Services",
        text: "one call does it all."
      }
    ],
    bannerForm: {
      heading: "Looking for a Handyman?",
      subHeading: "We solve your Home repair needs!",
      image: {
        src: "images/f1.png",
        alt: "handy man"
      },
      form: {
        inputs: [
          { name: "Name", placeHolder: "your name", type: "text" },
          { name: "Email", placeHolder: "email@example.com", type: "email" },
          { name: "Mobile", placeHolder: "07123456789", type: "text" },
          { name: "Address", placeHolder: "your address", type: "text" }
        ],
        services: [
          "---- SELECT ----",
          "Electrical Service",
          "Plumbing Service",
          "Painting",
          "Carpentry",
          "Gardening",
          "Other"
        ]
      }
    },
    servicePanel: {
      firstCol: [
        {
          heading: "maintenance",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.",
          icon: "fa fa-cog",
          link: "/about"
        },
        {
          heading: "cleaning",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.",
          icon: "fa fa-check-square-o",
          link: "/about"
        }
      ],
      secondCol: [
        {
          heading: "repair",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.",
          icon: "fa fa-yelp",
          link: "/about"
        },
        {
          heading: "improvement",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.",
          icon: "fa fa-gg",
          link: "/about"
        }
      ]
    },
    whyUs: {
      left: {
        heading: "Why",
        subHeading: "Choose Us"
      },
      right: {
        heading: "One Stop Solution for your Complete Home Maintenance",
        list: [
          {
            heading: "Vision",
            text: "Consectetur adipiscing elit estibulum nibh urna",
            icon: "fa fa-check"
          },
          {
            heading: "Affordable",
            text: "Consectetur adipiscing elit estibulum nibh urna",
            icon: "fa fa-book"
          },
          {
            heading: "Quality",
            text: "Consectetur adipiscing elit estibulum nibh urna",
            icon: "fa fa-photo"
          },
          {
            heading: "24*7 Support",
            text: "Consectetur adipiscing elit estibulum nibh urna",
            icon: "fa fa-briefcase"
          }
        ],
        image: {
          src: "images/a1.png",
          alt: "handy man"
        }
      }
    }
    // heroText: "blah blah blah",
    // describeSection: {
    //   heading: "blah blah 1",
    //   text:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //   image: {
    //     src:
    //       "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
    //     alt: ""
    //   }
    // }
  },
  servicesSection: {
    heading: "Our Services",
    category: [
      {
        name: "HandyMan",
        link: "handyMan",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src:
            "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
          alt: ""
        },
        services: [
          {
            name: "subservice1",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: ""
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: ""
                },
                link: ""
              }
            ]
          }
        ]
      },
      {
        name: "Electrics",
        link: "electrics",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src:
            "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
          alt: ""
        },
        services: [
          {
            name: "subservice1",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: ""
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: ""
                },
                link: ""
              }
            ]
          }
        ]
      },
      {
        name: "Home Makeover",
        link: "home-makeover",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src:
            "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
          alt: ""
        },
        services: [
          {
            name: "subservice1",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: ""
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: ""
                },
                link: ""
              }
            ]
          }
        ]
      },
      {
        name: "Carpentry",
        link: "carpentry",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src:
            "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
          alt: ""
        },
        services: [
          {
            name: "subservice1",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: ""
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: ""
                },
                link: ""
              }
            ]
          }
        ]
      },
      {
        name: "Plumbing",
        link: "plumbing",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src:
            "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
          alt: ""
        },
        services: [
          {
            name: "subservice1",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: ""
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: ""
                },
                link: ""
              }
            ]
          }
        ]
      },
      {
        name: "Moving Services",
        link: "moving-services",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src:
            "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
          alt: ""
        },
        services: [
          {
            name: "subservice1",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: ""
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: ""
                },
                link: ""
              }
            ]
          }
        ]
      },
      {
        name: "Decorating",
        link: "decorating",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src:
            "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
          alt: ""
        },
        services: [
          {
            name: "subservice1",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: ""
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: ""
                },
                link: ""
              }
            ]
          }
        ]
      },
      {
        name: "Jet Washing",
        link: "jet-washing",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src:
            "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
          alt: ""
        },
        services: [
          {
            name: "subservice1",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: ""
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: ""
                },
                link: ""
              }
            ]
          }
        ]
      },
      {
        name: "Locksmith",
        link: "locksmith",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src:
            "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
          alt: ""
        },
        services: [
          {
            name: "subservice1",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: ""
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: ""
                },
                link: ""
              }
            ]
          }
        ]
      }
    ]
  },
  prices: {
    title: "Our Rates",
    subHeader: "blah blah blah",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
    tableStandard: {}
  }
};

export default data;
