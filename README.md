## [Live Link](https://dot-travel-frontend.vercel.app/)  [Frontend-code](https://github.com/mohammadShamimReza/dot-blog-frontend)



The platform allows users to manage their entire travel journey from a central location, ensuring efficiency. It offers features like booking travel packages, exploring destinations, sharing reviews, and giving ratings. With an intuitive interface, Dot-travel prioritizes user-friendly design for easy accessibility.



## checking credientiels

**super_admin account:**
email: super_admin@gamil.com
password: super_admin


**admin account:**
email: admin@gmail.com
passsword: admin_admin


**user account:**
email: user@gmail.com
passsword: user_user



## ERD 


# dot-travel-backend![prisma-erd](https://github.com/mohammadShamimReza/dot-travel-backend/assets/98412540/577a7dbe-6c5e-43c8-bd9b-5260f1b9ab03)


## Models

### User    
1. id
2. firstName
3. lastName  
4. email
5. password
6. phone
7. role
8. profileImage
10. address
11. reviewAndRating (relational)
12. BookedPackages (relational)
13. addToCartPackage (relational)

## Package    
1. Id
2. title
3. description
4. price
5. from
6. to
7. maxUser
8. packageImage
9. destination
10. reviewAndRating (relational)
11. BookedPackages (relational)
12. addToCartPackage (relational)

## BookedPackage    
1. id
2. userId (relational)
3. packageId (relational)  

## AddToCartPackage    
1. id
2. userId (relational)
3. packageId (relational)  

## PackageReviewAndRating    
1. id
2. review
3. rating
4. userId (relational)
5. packageId (relational)  

## Faq    
1. id
2. title
3. description  

## Blog    
1. id.
2. title
3. description  


## Api
### auth

1. auth/login ( POST )
2. auth/refresh-token ( POST )

1. auth/change-password ( POST )
2. auth/forget-password ( POST )
3. auth/reset-password ( POST)

### user

1. user ( POST ) - create user
2. users (Get)
3. users/:id ( GET )
4. users/:id ( PATCH )
5. users?page=1&limit=10 ( GET )
6. users/:id ( DELETE )


### Package

1. package( POST ) - create package
2. package (Get)
3. package/:id ( GET )
4. package/:id ( PATCH )
5. package?page=1&limit=10 ( GET )
6. package/:id ( DELETE )


### Booked package

1. booked-packages ( POST ) - create user
2. booked-packages/:id ( GET )
3. booked-packages/:id ( PATCH )
4. booked-packages?page=1&limit=10 ( GET )
5. booked-packages/:id ( DELETE )


### PackageReviewAndRating

1. PackageReviewAndRating ( POST ) - create user
2. PackageReviewAndRating/:id ( GET )
3. PackageReviewAndRating/:id ( PATCH )
4. PackageReviewAndRating?page=1&limit=10 ( GET )
5. PackageReviewAndRating/:id ( DELETE )






Dot-travel is an innovative project introducing a smart control system for a travel agency website. Built with technologies like TypeScript, Next.js, Tailwind, Express.js, Node.js, Prisma PostgreSQL, Zod, and Yup, it focuses on a seamless user experience.

## 

In summary, Dot-travel transforms the travel agency experience by providing a personalized, efficient, and user-friendly platform for travelers.