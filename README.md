# FitLog — Workout Library

**FitLog** is a modern, responsive workout library and planning web application built with **Next.js, TypeScript, and Tailwind CSS**.

It allows users to explore workouts, view detailed exercise information, create a daily workout plan, and save workouts for later.

---

## Features

### Workout Library

- Browse workouts from the FitLog workout API
- Responsive workout card layout
- Workout image and category tags
- Workout name and equipment information
- Duration, calories, and rating
- Click any workout to view its details

### Today's Plan

- Add workouts to today's plan
- Maximum of 5 workouts can be added
- Dynamic Plan counter
- View selected workouts from the **My Plan** page
- Remove workouts from the plan
- Mark workouts as completed
- Live workout statistics

### Save for Later

- Save workouts for later
- Dynamic Saved counter
- View saved workouts from the **Saved** tab
- Remove saved workouts when no longer needed

### Workout Details

- Dedicated details page for each workout
- Large workout image
- Workout description
- Muscle group/category tags
- Equipment information
- Duration, calories, and rating
- Step-by-step workout instructions
- Add to Today's Plan
- Save for Later

### Toast Notifications

- Success notification when adding a workout
- Notification when saving a workout
- Notification when removing a workout
- Notification when marking a workout as completed

### Responsive Design

FitLog is designed to work across:

- Mobile
- Tablet
- Desktop

The layout, navigation, hero section, workout cards, and My Plan page are responsive.

### Custom 404 Page

A custom 404 page is included for:

- Unknown routes
- Invalid workout IDs
- Missing pages

---

## Technologies Used

### Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

### Libraries

- **React Icons**
- **React Toastify**

### State Management

- **React Context API**

### Data

- **REST API**

---

## 🎨 Design

FitLog follows a dark, minimal, gym-focused visual style.

### 🎨 Color Palette

| Color          | Hex       |
| -------------- | --------- |
| Background     | `#0B0B0F` |
| Card           | `#11111A` |
| Primary Accent | `#C2F800` |

The interface uses a high-contrast lime accent to create a focused workout experience.

---

## Pages

### Home Page

**Route:** `/`

Includes:

- Navbar
- Hero section
- Workout Library
- Workout cards
- Footer

### Workout Details Page

**Route:** `/[id]`

Includes:

- Workout image
- Workout description
- Muscle groups
- Key specifications
- Instructions
- Add to Today's Plan
- Save for Later

### My Plan Page

**Route:** `/my-plan`

Includes:

- Exercises statistics
- Minutes statistics
- Calories statistics
- Today's Plan tab
- Saved tab
- Workout cards
- View Details
- Mark as Done
- Remove workout
- Empty state

### 🚫 404 Page

A custom 404 page is displayed for invalid or unknown routes.

---

## 🔌 API

FitLog uses a REST API to fetch workout data.

### API Endpoint

```text
https://api.abcz.workers.dev/api/fitlog
```

### Workout Data Includes

- `id`
- `image`
- `name`
- `equipment`
- `duration`
- `caloriesBurned`
- `rating`
- `description`
- `muscleGroups`

---

## My Plan Statistics

The **My Plan** page dynamically calculates:

### Exercises

Total number of workouts currently added to Today's Plan.

### Minutes

Total duration of all workouts in Today's Plan.

### Calories

Total estimated calories from the selected workouts.

These statistics update automatically when workouts are added or removed.

---

## Deployment

FitLog can be deployed using:

- **Vercel**

## Developer

### Piyas Ahmed

Frontend Web Developer

---

## Project Status & AI Assistance

# Project Status

This project is not completely finished yet. Some features and improvements are still pending, and I plan to continue working on them in the future.

## AI Assistance

I used AI assistance for some parts of the UI/design and styling ideas. However, the project structure, functionality, implementation, and learning process were handled by me.

AI was mainly used as a design and development assistant, not as a replacement for understanding the code or building the project.

## License

This project was created for **educational and portfolio purposes**.
