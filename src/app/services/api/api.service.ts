import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorCookies } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  allUsers: any;
  users: any = [
    {
      userId: 1,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 2,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 3,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 4,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 5,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 6,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 7,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 8,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 9,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 10,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 11,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
    {
      userId: 12,
      username: 'harsha_21',
      profilePic:
        'https://th.bing.com/th/id/OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
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
              time: Date.now(),
            },
          ],
        },
        {
          post: 'https://th.bing.com/th/id/OIP.KmqXnbahlCKIv05VbBOfSwHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7',
          likes: [1, 2, 7, 8],
          comments: [
            {
              text: 'Cute',
              userId: 3,
              time: Date.now(),
            },
          ],
        },
      ],
      highLights: [
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.LnKcDsNtbcChPOKUKPVaiwHaI6?w=181&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
        {
          imgSrc:
            'https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=144&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7',
        },
      ],
      messages: [
        {
          sentUser: 2,
          text: 'Reached',
        },
        {
          sentUser: 4,
          text: 'Good',
        },
      ],
    },
  ];

  currentUser: any;

  userId: string;

  constructor(private http: HttpClient) {}

  async getUserPosts() {
    const posts = await this.http.get('http://localhost:3000/posts', {
      withCredentials: true,
    });
    console.log(
      'posts',
      posts.subscribe((x) => console.log(x))
    );
  }

  async loginUser(email: string, password: string) {
    const user = await this.http.post(
      'http://localhost:3000/auth/login',
      { email, password },
      {
        withCredentials: true,
      }
    );
    user.subscribe((x) => {
      console.log(x);
    });
  }

  getPost(post_id: string) {
    return this.http
      .get('http://localhost:3000/posts/' + post_id)
      .toPromise()
      .catch((err) => {});
  }

  async getAllUsers() {
    return await this.http
      .get('http://localhost:3000/user/users', {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  getCurrentUser() {
    return this.http
      .get('http://localhost:3000/user/me', {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  getUserHighlights() {
    return this.http
      .get('http://localhost:3000/story/current-user-stories', {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  getFollowingStories() {
    return this.http
      .get('http://localhost:3000/story/following-stories', {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  getFollowingPosts() {
    return this.http
      .get('http://localhost:3000/posts/following-posts', {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  getUsersRecommendedPeople() {
    return this.http
      .get('http://localhost:3000/user/recommended-people', {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  getPostComments(post_id) {
    return this.http
      .get('http://localhost:3000/comments/post/' + post_id, {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  likePost(post_id: string, isLiked) {
    return this.http
      .put(
        'http://localhost:3000/posts/likes/' + post_id,
        {
          isLiked: isLiked,
        },
        {
          withCredentials: true,
        }
      )
      .toPromise()
      .catch((err) => {});
  }

  addComment(user_comment, post_id) {
    return this.http
      .post(
        'http://localhost:3000/comments',
        {
          user_comment,
          post_id,
        },
        {
          withCredentials: true,
        }
      )
      .toPromise()
      .catch((err) => {});
  }

  addPost() {
    return this.http
      .post(
        'http://localhost:3000/posts',
        {
          post_image_url:
            'https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg',
        },
        {
          withCredentials: true,
        }
      )
      .toPromise()
      .catch((err) => {});
  }

  getUser(user_id: string) {
    return this.http
      .get('http://localhost:3000/user/' + user_id, {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  addToSavedPosts(postId: string) {
    return this.http
      .put(
        'http://localhost:3000/user/' + postId,
        {},
        {
          withCredentials: true,
        }
      )
      .toPromise()
      .catch((err) => {});
  }

  requestUserToFollow(userId: string) {
    return this.http
      .put(
        'http://localhost:3000/user/follow-requests',
        {
          userId,
        },
        {
          withCredentials: true,
        }
      )
      .toPromise()
      .catch((err) => {});
  }

  getFollowRequests() {
    return this.http
      .get('http://localhost:3000/user/follow-requests', {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  addFollower(userId: string) {
    this.http
      .put(
        'http://localhost:3000/user/followers',
        {
          userId,
        },
        {
          withCredentials: true,
        }
      )
      .toPromise()
      .catch((err) => {});
  }

  removeFollower(userId: string) {
    this.http
      .delete('http://localhost:3000/user/followers/' + userId, {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  deleteFollowRequest(userId) {
    this.http
      .delete('http://localhost:3000/user/follow-requests/' + userId, {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  getFollowingList() {
    return this.http
      .get('http://localhost:3000/user/following', {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  getSentRequests() {
    return this.http
      .get('http://localhost:3000/user/sent-requests', {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }

  getNotifications() {
    return this.http
      .get('http://localhost:3000/user/notifications', {
        withCredentials: true,
      })
      .toPromise()
      .catch((err) => {});
  }
}
