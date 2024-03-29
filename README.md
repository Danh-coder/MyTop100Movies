<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center" style="font-weight: bold">MyTop100Movies</h3>

  <p align="center">
    An awesome API for creating movie lists and rating favourite movies
    <br />
    <br />
    <a href="https://mytop100movies.b4a.app/">View Demo</a>
    ·
    <a href="https://github.com/Danh-coder/MyTop100Movies/issues">Report Bug</a>
    ·
    <a href="https://github.com/Danh-coder/MyTop100Movies/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#item">Item</a></li>
        <li><a href="#movie-list">Movie List</a></li>
        <li><a href="#user">User</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<a href="https://mytop100movies.b4a.app/"><img src="https://i.ibb.co/zVWc6cD/Screenshot-20221113-031849.png" alt="Screenshot-20221113-031849"/></a>

Today, there are lots of students choosing Front-end developer as their future career. They start with HTML, CSS, JavaScript before learning more advancing libraries and frameworks such as React. Besides learning new things, they have to get their hands dirty by projects, but they only display UI and lack of real user experience due to no real data or Back-end service.

So if you want to build movie-related Front-end projects or simply find an inspiration for new projects, you must consider my project. Here are MyTop100Movies API's features:

* Viewing recently trending movies and tv shows 
* Looking up movie details
* Creating movie or TV show lists
* Rating your watched movies and tv shows
* Refering other filmaholics' watching lists and ratings 
* Authentication: Register, Log in, Log out, Bearer token

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

MyTop100Movies API cannot be done without these popular tools:

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Item

#### GET [mytop100movies.b4a.app/](https://mytop100movies.b4a.app/)

This method will provide trending movies and tv shows

| **Response**  | **Data type** | **Value**                                                                                                                                                                   |
|---------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| page          | Int           | 1                                                                                                                                                                           |
| results       | Array         | List of _Movie_                                                                                                                                                             |
| _Movie_       | Object        | adult, backdrop_path, id, title, original_language, original_title, overview, poster_path, media_type, genre_ids, popularity, release_date, video, vote_average, vote_count |
| total_pages   | Int           |                                                                                                                                                                             |
| total_results | Int           |                                                                                                                                                                             |


#### GET [mytop100movies.b4a.app/items/{item_type}/{item_id}](https://mytop100movies.b4a.app/items/movie/2)

This method will provide details of a particular movie or TV show

| Params    | Data type | Value           |
|-----------|-----------|-----------------|
| item_type | String    | 'movie' or 'tv' |
| item_id   | Integer   |                 |

| **Body**              | **Data type** | **Value**                                                                          |
|-----------------------|---------------|------------------------------------------------------------------------------------|
| adult                 | Boolean       |                                                                                    |
| backdrop_path         | String        | an _URL_ but should add with "https://image.tmdb.org/t/p/original/" to fetch image (Example: https://image.tmdb.org/t/p/original/jYtNUfMbU6DBbmd4LUS19u4hF4p.jpg) |
| belongs_to_collection | Object        | id, name, poster_path, backdrop_path                                               |
| budget                | Int           |                                                                                    |
| genres                | Array         | List of _Genre_                                                                    |
| _Genre_               | Object        | id, name                                                                           |
| homepage              | String        |                                                                                    |
| id                    | Int           |                                                                                    |
| imdb_id               | String        |                                                                                    |
| original_language     | String        |                                                                                    |
| original_title        | String        |                                                                                    |
| overview              | String        |                                                                                    |
| popularity            | Int           |                                                                                    |
| poster_path           | String        | an _URL_ but should add with "https://image.tmdb.org/t/p/original/" to fetch image (Example: https://image.tmdb.org/t/p/original/jYtNUfMbU6DBbmd4LUS19u4hF4p.jpg) |
| production_companies  | Array         | List of _Company_                                                                  |
| _Company_             | Object        | id, logo_path, name, origin_country                                                |
| production_countries  | Array         | List of _Country_                                                                  |
| _Country_             | Object        | iso_3166_1, name                                                                   |
| release_date          | Date          |                                                                                    |
| revenue         | Int     |                               |
| runtime         | Int     |                               |
| spoken_language | Array   | List of _Language_            |
| _Language_      | Object  | english_name, iso_639_1, name |
| status          | String  |                               |
| tagline         | String  |                               |
| title           | String  |                               |
| video           | Boolean |                               |
| vote_average    | Int     |                               |
| vote_count      | Int     |                               |
| vote_count      | Int     |                               |



#### POST [mytop100movies.b4a.app/items/{item_type}/{item_id}](https://mytop100movies.b4a.app/items/movie/2)

This method will create or update your rating

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| Params    | Data type | Value           |
|-----------|-----------|-----------------|
| item_type | String    | 'movie' or 'tv' |
| item_id   | Integer   |                 |

| **Body** | **Data type** | **Constraint**   |
|----------|---------------|------------------|
| rating   | Float         | 0 <= rating <= 5 |

| **Response** | **Data type** | **Value**           |
|--------------|---------------|---------------------|
| _id          | String        |                     |
| media_type   | String        | 'movie' or 'tv'     |
| media_id     | String        |                     |
| ratings      | Array         | List of _Rating_    |
| _Rating_       | Object        | author, rating, _id |
| __v          | Int           |                     |

#### DELETE [mytop100movies.b4a.app/items/{item_type}/{item_id}](https://mytop100movies.b4a.app/items/movie/2) 

This method will remove your rating

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| Params    | Data type | Value           |
|-----------|-----------|-----------------|
| item_type | String    | 'movie' or 'tv' |
| item_id   | Integer   |                 |

| **Response** | **Data type** | **Value**           |
|--------------|---------------|---------------------|
| _id          | String        |                     |
| media_type   | String        | 'movie' or 'tv'     |
| media_id     | String        |                     |
| ratings      | Array         | List of _Rating_    |
| _Rating_       | Object        | author, rating, _id |
| __v          | Int           |                     |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Movie List

#### GET [mytop100movies.b4a.app/me/lists](https://mytop100movies.b4a.app/me/lists) 

This method will provide all the lists you have created so far

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| Response  | Data type | Value        |
|-----------|-----------|--------------|
| _id       | String    | List id      |
| name      | String    |              |
| items     | Array     | List of _Item_ |
| _Item_      | Object    | _id, item    |
| author    | String    | author id    |
| createdAt | Date      |              |
| updatedAt | Date      |              |
| __v       | Int       |              |


#### GET [mytop100movies.b4a.app/{user_id}/lists](https://mytop100movies.b4a.app/63661d7e9708e33cf8b2d805/lists) 

This method will provide all the lists that a particular user has created so far

| Params  | Data type | Value |
|---------|-----------|-------|
| user_id | String    |       |

| Response  | Data type | Value        |
|-----------|-----------|--------------|
| _id       | String    | List id      |
| name      | String    |              |
| items     | Array     | List of _Item_ |
| _Item_      | Object    | _id, item    |
| author    | String    | author id    |
| createdAt | Date      |              |
| updatedAt | Date      |              |
| __v       | Int       |              |


#### GET [mytop100movies.b4a.app/me/lists/{list_id}](https://mytop100movies.b4a.app/me/lists/63662ec98b8338e39f9c6833) 

This method will provide your list details

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| Params  | Data type | Value |
|---------|-----------|-------|
| list_id | String    |       |

| **Response** | **Data type** | **Value**    |
|--------------|---------------|--------------|
| _id          | String        | List id      |
| name         | String        |              |
| items        | Array         | List of _Item_ |
| _Item_         | Object        | _id, item    |
| author       | String        | author id    |
| createdAt    | Date          |              |
| updatedAt    | Date          |              |
| __v          | Int           |              |

#### GET [mytop100movies.b4a.app/{user_id}/lists/{list_id}](https://mytop100movies.b4a.app/63661d7e9708e33cf8b2d805/lists/636de56acd06bb35fbf6bccd) 

This method will provide another user's list details

| Params  | Data type | Value |
|---------|-----------|-------|
| user_id | String    |       |
| list_id | String    |       |

| **Response** | **Data type** | **Value**    |
|--------------|---------------|--------------|
| _id          | String        | List id      |
| name         | String        |              |
| items        | Array         | List of _Item_ |
| Item         | Object        | _id, item    |
| author       | String        | author id    |
| createdAt    | Date          |              |
| updatedAt    | Date          |              |
| __v          | Int           |              |

#### POST [mytop100movies.b4a.app/me/lists](https://mytop100movies.b4a.app/me/lists) 

This method will create you a new movie list

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| Body | Data type | Constraint       |
|------|-----------|------------------|
| name | String    | Required, Unique |

| **Response** | **Data type** | **Value**    |
|--------------|---------------|--------------|
| _id          | String        | List id      |
| name         | String        |              |
| items        | Array         | [ ] |
| author       | String        | author id    |
| createdAt    | Date          |              |
| updatedAt    | Date          |              |
| __v          | Int           |              |

#### POST [mytop100movies.b4a.app/me/lists/{list_id}](https://mytop100movies.b4a.app/me/lists/63662ec98b8338e39f9c6833)

This method will add movie(s) or tv show(s) to your list

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| Params  | Data type | Value |
|---------|-----------|-------|
| list_id | String    |       |

| Body       | Data type | Constraint | Value                |
|------------|-----------|------------|----------------------|
| items      | Array     |            | List of _Item_       |
| _Item_     | Object    |            | media_id, media_type |
| media_id   | Int       | Required   |                      |
| media_type | String    | Required   | "movie" or "tv"      |

| **Response** | **Data type** | **Value**    |
|--------------|---------------|--------------|
| _id          | String        | List id      |
| name         | String        |              |
| items        | Array         | List of _Item_ |
| _Item_         | Object        | _id, item    |
| author       | String        | author id    |
| createdAt    | Date          |              |
| updatedAt    | Date          |              |
| __v          | Int           |              |

#### PATCH [mytop100movies.b4a.app/me/lists/{list_id}](https://mytop100movies.b4a.app/me/lists/63662ec98b8338e39f9c6833)

This method will update your list name

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| Params  | Data type | Value |
|---------|-----------|-------|
| list_id | String    |       |

| Body | Data type | Constraint       |
|------|-----------|------------------|
| name | String    | Required, Unique |

| **Response** | **Data type** | **Value**    |
|--------------|---------------|--------------|
| _id          | String        | List id      |
| name         | String        |              |
| items        | Array         | List of _Item_ |
| _Item_         | Object        | _id, item    |
| author       | String        | author id    |
| createdAt    | Date          |              |
| updatedAt    | Date          |              |
| __v          | Int           |              |

#### DELETE [mytop100movies.b4a.app/me/lists/{list_id}](https://mytop100movies.b4a.app/me/lists/63662ec98b8338e39f9c6833)

This method will delete your list

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| Params  | Data type | Value |
|---------|-----------|-------|
| list_id | String    |       |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### User

#### POST [mytop100movies.b4a.app/users](https://mytop100movies.b4a.app/users) 

This method will allow you to sign up

| **Body** | **Data type** | **Constraint**       |
|----------|---------------|----------------------|
| username | String        | Default: 'Anonymous' |
| email    | String        | Required, Unique     |
| password | String        | Required             |

| **Response** | **Data type** | **Value**                 |
|--------------|---------------|---------------------------|
| user         | Object        | username, email, _id, __v |
| token        | Bearer token  |                           |


#### POST [mytop100movies.b4a.app/users/login](https://mytop100movies.b4a.app/users/login) 

This method will allow you to log in

| **Body** | **Data type** | **Constraint**       |
|----------|---------------|----------------------|
| email    | String        | Required     |
| password | String        | Required             |

| **Response** | **Data type** | **Value**                 |
|--------------|---------------|---------------------------|
| user         | Object        | username, email, _id, __v |
| token        | Bearer token  |                           |

#### POST [mytop100movies.b4a.app/users/logout](https://mytop100movies.b4a.app/users/logout) 

This method will allow you to log out an device

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer Token | Bearer <your_access_token> |

#### POST [mytop100movies.b4a.app/users/logoutAll](https://mytop100movies.b4a.app/users/logoutAll) 

This method will allow you to log out all your devices

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer Token | Bearer <your_access_token> |
#### GET [mytop100movies.b4a.app/users/me](https://mytop100movies.b4a.app/users) 

This method will provide your profile

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| Response | Data type |
|----------|-----------|
| _id      | String    |
| username | String    |
| email    | String    |
| __v      | Int       |

#### GET [mytop100movies.b4a.app/users/{user_id}](https://mytop100movies.b4a.app/users/63661d7e9708e33cf8b2d805) 

This method will provide a particular user profile

| Response | Data type |
|----------|-----------|
| _id      | String    |
| username | String    |
| email    | String    |
| __v      | Int       |

#### PATCH [mytop100movies.b4a.app/users/me](https://mytop100movies.b4a.app/users/me) 

This method will update your profile

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| **Body** | **Data type** | **Constraint** |
|----------|---------------|----------------|
| username | String        |                |
| email    | String        | Unique         |
| password | String        |                |


#### DELETE [mytop100movies.b4a.app/users/me](https://mytop100movies.b4a.app/users/me) 

This method will delete your account and your lists

| Headers       | Data type    | Value                      |
|---------------|--------------|----------------------------|
| Authorization | Bearer token | Bearer <your_access_token> |

| Response | Data type |
|----------|-----------|
| _id      | String    |
| username | String    |
| email    | String    |
| __v      | Int       |

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Phan Công Danh - [Danh Công Phan](https://www.facebook.com/danhfan.cool) - danhphan141204@gmail.com

Project Link: [https://github.com/Danh-coder/MyTop100Movies](https://github.com/Danh-coder/MyTop100Movies)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/danh-phan-141204/
[product-screenshot]: https://i.ibb.co/chK5Y5V/Screenshot-20221113-031849.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
