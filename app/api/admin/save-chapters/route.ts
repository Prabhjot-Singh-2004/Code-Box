import { db } from "@/config/db"
import { CourseChaptersTable } from "@/config/schema"
import { NextRequest, NextResponse } from "next/server"

const DATA=
[
    {
    "id": 1,
    "name": "Hooks Awakening",
    "desc": "Move beyond the basics and unlock the true power of React using hooks to manage logic, state, and lifecycle behavior.",
    "exercises": [
      {
        "name": "Why Hooks Exist",
        "slug": "why-hooks-exist",
        "xp": 25,
        "difficulty": "medium"
      },
      {
        "name": "Rules of Hooks Trial",
        "slug": "rules-of-hooks-trial",
        "xp": 30,
        "difficulty": "medium"
      },
      {
        "name": "useEffect Introduction",
        "slug": "useeffect-introduction",
        "xp": 30,
        "difficulty": "medium"
      },
      {
        "name": "Effect Dependencies Arena",
        "slug": "effect-dependencies-arena",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Cleanup Ritual",
        "slug": "cleanup-ritual",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Hooks Master Check",
        "slug": "hooks-master-check",
        "xp": 30,
        "difficulty": "medium"
      }
    ]
  },
    {
    "id": 2,
    "name": "Advanced State Patterns",
    "desc": "Master complex state management patterns and learn how to structure state for scalable React applications.",
    "exercises": [
      {
        "name": "State as a System",
        "slug": "state-as-a-system",
        "xp": 25,
        "difficulty": "medium"
      },
      {
        "name": "useReducer Awakening",
        "slug": "usereducer-awakening",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Actions & Reducers",
        "slug": "actions-and-reducers",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Reducer vs useState",
        "slug": "reducer-vs-usestate",
        "xp": 30,
        "difficulty": "medium"
      },
      {
        "name": "Complex State Trial",
        "slug": "complex-state-trial",
        "xp": 40,
        "difficulty": "medium"
      },
      {
        "name": "State Mastery Check",
        "slug": "state-mastery-check",
        "xp": 30,
        "difficulty": "medium"
      }
    ]
  },
   {
    "id": 3,
    "name": "Context & Global Power",
    "desc": "Learn how to share data across the React realm without prop drilling by using Context wisely.",
    "exercises": [
      {
        "name": "Why Context Exists",
        "slug": "why-context-exists",
        "xp": 25,
        "difficulty": "medium"
      },
      {
        "name": "Create the Context",
        "slug": "create-the-context",
        "xp": 30,
        "difficulty": "medium"
      },
      {
        "name": "Provider Ritual",
        "slug": "provider-ritual",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Consume the Power",
        "slug": "consume-the-power",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Avoid Prop Drilling",
        "slug": "avoid-prop-drilling",
        "xp": 40,
        "difficulty": "medium"
      },
      {
        "name": "Context Master Check",
        "slug": "context-master-check",
        "xp": 30,
        "difficulty": "medium"
      }
    ]
  },
    {
    "id": 4,
    "name": "Performance & Optimization",
    "desc": "Sharpen your React skills by learning how to optimize rendering, avoid unnecessary work, and keep your apps fast.",
    "exercises": [
      {
        "name": "Why Performance Matters",
        "slug": "why-performance-matters",
        "xp": 25,
        "difficulty": "medium"
      },
      {
        "name": "Memoization Basics",
        "slug": "memoization-basics",
        "xp": 30,
        "difficulty": "medium"
      },
      {
        "name": "useMemo Trial",
        "slug": "usememo-trial",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "useCallback Arena",
        "slug": "usecallback-arena",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Prevent Unnecessary Renders",
        "slug": "prevent-unnecessary-renders",
        "xp": 40,
        "difficulty": "medium"
      },
      {
        "name": "Performance Master Check",
        "slug": "performance-master-check",
        "xp": 30,
        "difficulty": "medium"
      }
    ]
  },
    {
    "id": 5,
    "name": "Side Effects & Data Fetching",
    "desc": "Master side effects in React by handling data fetching, subscriptions, and async flows safely and predictably.",
    "exercises": [
      {
        "name": "Understanding Side Effects",
        "slug": "understanding-side-effects",
        "xp": 25,
        "difficulty": "medium"
      },
      {
        "name": "useEffect Deep Dive",
        "slug": "useeffect-deep-dive",
        "xp": 30,
        "difficulty": "medium"
      },
      {
        "name": "Fetch Data Ritual",
        "slug": "fetch-data-ritual",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Loading & Error States",
        "slug": "loading-and-error-states",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Avoid Infinite Loops",
        "slug": "avoid-infinite-loops",
        "xp": 40,
        "difficulty": "medium"
      },
      {
        "name": "Side Effects Master Check",
        "slug": "side-effects-master-check",
        "xp": 30,
        "difficulty": "medium"
      }
    ]
  },
    {
    "id": 6,
    "name": "Refs & Imperative Control",
    "desc": "Gain fine-grained control over the DOM and component instances using refs and imperative patterns.",
    "exercises": [
      {
        "name": "Why Refs Exist",
        "slug": "why-refs-exist",
        "xp": 25,
        "difficulty": "medium"
      },
      {
        "name": "useRef Awakening",
        "slug": "useref-awakening",
        "xp": 30,
        "difficulty": "medium"
      },
      {
        "name": "DOM Access Trial",
        "slug": "dom-access-trial",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Persist Values with Refs",
        "slug": "persist-values-with-refs",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Imperative Handle Ritual",
        "slug": "imperative-handle-ritual",
        "xp": 40,
        "difficulty": "medium"
      },
      {
        "name": "Refs Master Check",
        "slug": "refs-master-check",
        "xp": 30,
        "difficulty": "medium"
      }
    ]
  },
    {
    "id": 7,
    "name": "Routing & Navigation",
    "desc": "Learn how to navigate across the React realm using client-side routing and structured navigation patterns.",
    "exercises": [
      {
        "name": "Why Routing Matters",
        "slug": "why-routing-matters",
        "xp": 25,
        "difficulty": "medium"
      },
      {
        "name": "Router Setup Ritual",
        "slug": "router-setup-ritual",
        "xp": 30,
        "difficulty": "medium"
      },
      {
        "name": "Route Parameters Trial",
        "slug": "route-parameters-trial",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Navigation Links Quest",
        "slug": "navigation-links-quest",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Protected Routes Arena",
        "slug": "protected-routes-arena",
        "xp": 40,
        "difficulty": "medium"
      },
      {
        "name": "Routing Master Check",
        "slug": "routing-master-check",
        "xp": 30,
        "difficulty": "medium"
      }
    ]
  },
    {
    "id": 8,
    "name": "Architecture & Best Practices",
    "desc": "Consolidate your React knowledge by learning scalable architecture patterns and professional best practices.",
    "exercises": [
      {
        "name": "Folder Structure Wisdom",
        "slug": "folder-structure-wisdom",
        "xp": 25,
        "difficulty": "medium"
      },
      {
        "name": "Separation of Concerns",
        "slug": "separation-of-concerns",
        "xp": 30,
        "difficulty": "medium"
      },
      {
        "name": "Custom Hooks Forge",
        "slug": "custom-hooks-forge",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Error Boundaries Trial",
        "slug": "error-boundaries-trial",
        "xp": 35,
        "difficulty": "medium"
      },
      {
        "name": "Reusable Patterns Quest",
        "slug": "reusable-patterns-quest",
        "xp": 40,
        "difficulty": "medium"
      },
      {
        "name": "React Architect Graduation",
        "slug": "react-architect-graduation",
        "xp": 45,
        "difficulty": "medium"
      }
    ]
  }
]



export async function GET(req: NextRequest) {
    DATA.forEach(async (item) => {
        await db.insert(CourseChaptersTable).values({
            courseId: 4, //Change Course ID depends on course info,
            desc: item?.desc,
            exercises: item.exercises,
            name: item?.name,
            chapterId: item?.id
        })
    })
    return NextResponse.json('Success')
}

