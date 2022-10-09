import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users: any = [
    {
      userId: 1,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 2,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 3,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 4,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 5,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 6,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 7,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 8,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 9,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 10,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 11,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },{
      userId: 12,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    }
  ]

  profile: any = {
    userId: 22,
    username: 'siri_12',
    profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
    followers: [1, 2, 3, 4, 5, 6, 7, 10],
    following: [2, 5, 4],
    bio: 'Jst woke up',
    posts: [
      {
        postId: 1,
        post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        likes: [1, 2],
        comments: [
          {
            text: 'Super',
            userId: 2,
            time: Date.now()
          }
        ]
      },
      {
        postId: 2,
        post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        likes: [1, 2, 7, 8],
        comments: [
          {
            text: 'Cute',
            userId: 3,
            time: Date.now()
          }
        ]
      }
    ],
    highLights: [
      {
        imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
      },
      {
        imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
      }
    ],
    messages: [
      {
        sentUser: 2,
        text: 'Reached'
      },
      {
        sentUser: 4,
        text: 'Good'
      }
    ],
    suggestedPeople: [
    {
      userId: 2,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    },
    {
      userId: 3,
      username: 'harsha_21',
      profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      followers: [1, 2, 3, 4, 5, 6, 7, 10],
      following: [2, 5, 4],
      bio: 'Angel',
      posts: [
        {
          post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2],
          comments: [
            {
              text: 'Super',
              userId: 2,
              time: Date.now()
            }
          ]
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now()
            }
          ]
        }
      ],
      highLights: [
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        },
        {
          imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        }
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached'
        },
        {
          sentUser: 4,
          text: 'Good'
        }
      ]
    }
    ],
    requests: [
      {
        userId: 2,
        username: 'harsha_21',
        profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        followers: [1, 2, 3, 4, 5, 6, 7, 10],
        following: [2, 5, 4],
        bio: 'Angel',
        posts: [
          {
            post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
            likes: [1, 2],
            comments: [
              {
                text: 'Super',
                userId: 2,
                time: Date.now()
              }
            ]
          },
          {
            post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
            likes: [1, 2, 7, 8],
            comments: [
              {
                text: 'Cute',
                userId: 3,
                time: Date.now()
              }
            ]
          }
        ],
        highLights: [
          {
            imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
          },
          {
            imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
          }
        ],
        messages: [
          {
            sentUser: 2,
            text: 'Reached'
          },
          {
            sentUser: 4,
            text: 'Good'
          }
        ]
      },
      {
        userId: 3,
        username: 'harsha_21',
        profilePic: 'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        followers: [1, 2, 3, 4, 5, 6, 7, 10],
        following: [2, 5, 4],
        bio: 'Angel',
        posts: [
          {
            post: 'https://th.bing.com/th/id/OIP.9e_MIPAiqc_sa6EnrZMlrwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
            likes: [1, 2],
            comments: [
              {
                text: 'Super',
                userId: 2,
                time: Date.now()
              }
            ]
          },
          {
            post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
            likes: [1, 2, 7, 8],
            comments: [
              {
                text: 'Cute',
                userId: 3,
                time: Date.now()
              }
            ]
          }
        ],
        highLights: [
          {
            imgSrc: 'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
          },
          {
            imgSrc: 'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7'
          }
        ],
        messages: [
          {
            sentUser: 2,
            text: 'Reached'
          },
          {
            sentUser: 4,
            text: 'Good'
          }
        ]
      }
    ],
    sentRequests: [],
    saved: []
  }

  constructor() { }

}
