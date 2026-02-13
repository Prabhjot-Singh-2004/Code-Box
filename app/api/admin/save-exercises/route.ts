import { db } from "@/config/db"
import { ExerciseTable } from "@/config/schema"
import { NextRequest, NextResponse } from "next/server"

const DATA=[
  {
    "courseId": 4,
    "exerciseId": "why-hooks-exist",
    "exerciseName": "Why Hooks Exist",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>You have crossed into the deeper layers of the React Realm.</p><p style='margin-bottom:8px;'>Before hooks existed, React relied on class components for state and lifecycle logic.</p><p style='margin-bottom:8px;'>This often caused complex code, duplicated logic, and harder maintenance.</p><p style='margin-bottom:8px;'>Hooks were introduced to solve these problems.</p><p style='margin-bottom:8px;'>They allow function components to use state, side effects, and lifecycle behavior.</p><p style='margin-bottom:8px;'>Hooks make logic reusable without changing component structure.</p><p style='margin-bottom:8px;'>They reduce the need for classes in modern React applications.</p><p style='margin-bottom:8px;'>With hooks, related logic can live together instead of being split.</p><p style='margin-bottom:8px;'>This leads to cleaner, more readable components.</p><p style='margin-bottom:8px;'>Hooks encourage composability and predictable data flow.</p><p style='margin-bottom:8px;'>Understanding why hooks exist is critical before using them.</p><p style='margin-bottom:8px;'>This knowledge forms the foundation of intermediate React mastery.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to recognize the purpose of hooks.</p><p>Create a function component named <strong>HookReason</strong>.</p><p>Inside it, render a paragraph using <code>&lt;p&gt;</code> with the text <strong>Hooks let function components use state</strong>.</p><p>Render the <strong>HookReason</strong> component inside <strong>App</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Hooks are not required yet.</p><p>This task focuses only on understanding their purpose.</p></body>",
      "starterCode": {
        "/App.jsx": "function HookReason() {\n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      \n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Hooks let function components use state\\s*</p>",
      "output": "<p>Hooks let function components use state</p>",
      "hintXp": 30
    }
  }
,
  {
    "courseId": 4,
    "exerciseId": "rules-of-hooks-trial",
    "exerciseName": "Rules of Hooks Trial",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Power in the React Realm comes with strict rules.</p><p style='margin-bottom:8px;'>Hooks may look like simple functions, but they must be used correctly.</p><p style='margin-bottom:8px;'>React enforces rules to keep hooks predictable and stable.</p><p style='margin-bottom:8px;'>Hooks must be called at the top level of a component.</p><p style='margin-bottom:8px;'>They must never be called inside loops, conditions, or nested functions.</p><p style='margin-bottom:8px;'>Hooks must only be called from React function components.</p><p style='margin-bottom:8px;'>They can also be called from custom hooks.</p><p style='margin-bottom:8px;'>Breaking these rules causes unexpected behavior.</p><p style='margin-bottom:8px;'>React relies on call order to track hook state.</p><p style='margin-bottom:8px;'>Consistent hook usage ensures reliable rendering.</p><p style='margin-bottom:8px;'>This trial ensures you respect the laws of hooks.</p><p style='margin-bottom:8px;'>Follow the rules and the realm remains stable.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to follow the rules of hooks.</p><p>Create a component named <strong>RuleCheck</strong>.</p><p>Inside it, render a paragraph using <code>&lt;p&gt;</code> with the text <strong>Hooks follow strict rules</strong>.</p><p>Do not place hooks inside conditions or loops.</p><p>Render the <strong>RuleCheck</strong> component inside <strong>App</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>This exercise checks understanding, not hook usage.</p><p>Focus on structure and placement.</p></body>",
      "starterCode": {
        "/App.jsx": "function RuleCheck() {\n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      \n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Hooks follow strict rules\\s*</p>",
      "output": "<p>Hooks follow strict rules</p>",
      "hintXp": 30
    }
  }
,
  {
    "courseId": 4,
    "exerciseId": "useeffect-introduction",
    "exerciseName": "useEffect Introduction",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>As your components grow, they must react to the outside world.</p><p style='margin-bottom:8px;'>Some actions cannot happen during rendering.</p><p style='margin-bottom:8px;'>Fetching data, setting timers, and subscribing to events are side effects.</p><p style='margin-bottom:8px;'>React provides the <code>useEffect</code> hook to handle these effects.</p><p style='margin-bottom:8px;'>Effects run after the component renders.</p><p style='margin-bottom:8px;'>This keeps rendering pure and predictable.</p><p style='margin-bottom:8px;'>The effect function contains the side-effect logic.</p><p style='margin-bottom:8px;'>You can control when effects run using dependencies.</p><p style='margin-bottom:8px;'>Without dependencies, effects run after every render.</p><p style='margin-bottom:8px;'>Understanding <code>useEffect</code> is essential for real applications.</p><p style='margin-bottom:8px;'>This lesson introduces its purpose before deeper use.</p><p style='margin-bottom:8px;'>Prepare to control side effects safely.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to introduce <code>useEffect</code>.</p><p>Create a component named <strong>EffectIntro</strong>.</p><p>Inside it, use <code>useEffect</code> to log <strong>Effect activated</strong> to the console.</p><p>Also render a paragraph with the text <strong>Effect Initialized</strong>.</p><p>Render the <strong>EffectIntro</strong> component inside <strong>App</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Import <code>useEffect</code> from React.</p><p>An empty dependency array runs the effect once.</p></body>",
      "starterCode": {
        "/App.jsx": "import { useEffect } from \"react\";\n\nfunction EffectIntro() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      \n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Effect Initialized\\s*</p>",
      "output": "<p>Effect Initialized</p>",
      "hintXp": 35
    }
  }
,
  {
    "courseId": 4,
    "exerciseId": "effect-dependencies-arena",
    "exerciseName": "Effect Dependencies Arena",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The arena tests control, not raw power.</p><p style='margin-bottom:8px;'>An effect that runs too often can weaken performance.</p><p style='margin-bottom:8px;'>React uses a dependency array to control effect execution.</p><p style='margin-bottom:8px;'>Dependencies tell React when an effect should re-run.</p><p style='margin-bottom:8px;'>An empty array runs the effect only once.</p><p style='margin-bottom:8px;'>Adding variables makes the effect react to change.</p><p style='margin-bottom:8px;'>Incorrect dependencies cause stale data or infinite loops.</p><p style='margin-bottom:8px;'>Correct dependencies keep logic predictable.</p><p style='margin-bottom:8px;'>This arena sharpens your awareness of effect timing.</p><p style='margin-bottom:8px;'>Control the flow and remain stable.</p><p style='margin-bottom:8px;'>Mastery comes from restraint.</p><p style='margin-bottom:8px;'>Step carefully inside the arena.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to control when an effect runs.</p><p>Create a state variable named <strong>count</strong> starting at <strong>0</strong>.</p><p>Use <code>useEffect</code> so it logs <strong>Count changed</strong> whenever <strong>count</strong> updates.</p><p>Render a paragraph showing <strong>Count: 0</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add <code>count</code> inside the dependency array.</p><p>Use <code>useState</code> to create state.</p></body>",
      "starterCode": {
        "/App.jsx": "import { useEffect, useState } from \"react\";\n\nfunction EffectArena() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      <EffectArena />\n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Count:\\s*0\\s*</p>",
      "output": "<p>Count: 0</p>",
      "hintXp": 40
    }
  }
,
    {
    "courseId": 4,
    "exerciseId": "cleanup-ritual",
    "exerciseName": "Cleanup Ritual",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Not all side effects last forever.</p><p style='margin-bottom:8px;'>Some effects create subscriptions, timers, or listeners.</p><p style='margin-bottom:8px;'>If left unmanaged, these effects cause memory leaks.</p><p style='margin-bottom:8px;'>React provides a cleanup mechanism inside <code>useEffect</code>.</p><p style='margin-bottom:8px;'>The cleanup function runs before the effect re-runs.</p><p style='margin-bottom:8px;'>It also runs when the component unmounts.</p><p style='margin-bottom:8px;'>Cleanup keeps the React Realm stable and efficient.</p><p style='margin-bottom:8px;'>Without cleanup, old effects linger in the shadows.</p><p style='margin-bottom:8px;'>This ritual teaches responsibility and balance.</p><p style='margin-bottom:8px;'>Every effect you create must be cleaned when needed.</p><p style='margin-bottom:8px;'>Respect the lifecycle and restore order.</p><p style='margin-bottom:8px;'>Complete the ritual to continue forward.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to perform a cleanup ritual.</p><p>Use <code>useEffect</code> to start an interval.</p><p>The interval should log <strong>Tick</strong> every second.</p><p>Return a cleanup function that clears the interval.</p><p>Render a paragraph with the text <strong>Cleanup Active</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Return a function from <code>useEffect</code>.</p><p>Use <code>clearInterval</code> inside cleanup.</p></body>",
      "starterCode": {
        "/App.jsx": "import { useEffect } from \"react\";\n\nfunction CleanupRitual() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      <CleanupRitual />\n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Cleanup Active\\s*</p>",
      "output": "<p>Cleanup Active</p>",
      "hintXp": 40
    }
}
,
  {
    "courseId": 4,
    "exerciseId": "hooks-master-check",
    "exerciseName": "Hooks Master Check",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>You have learned why hooks exist and the rules that govern them.</p><p style='margin-bottom:8px;'>You explored side effects and learned how to control them.</p><p style='margin-bottom:8px;'>You managed dependencies and performed cleanup rituals.</p><p style='margin-bottom:8px;'>Now comes the final trial of this chapter.</p><p style='margin-bottom:8px;'>This challenge confirms your understanding of hooks usage.</p><p style='margin-bottom:8px;'>Balance, correctness, and clarity are required.</p><p style='margin-bottom:8px;'>A true React explorer uses hooks responsibly.</p><p style='margin-bottom:8px;'>This master check ties all lessons together.</p><p style='margin-bottom:8px;'>Focus on structure rather than complexity.</p><p style='margin-bottom:8px;'>Prove you are ready to move forward.</p><p style='margin-bottom:8px;'>Complete this and unlock the next chapter.</p><p style='margin-bottom:8px;'>The realm acknowledges your progress.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to combine basic hook knowledge.</p><p>Create a component named <strong>HookSummary</strong>.</p><p>Inside it, use <code>useState</code> to create a state variable <strong>active</strong> with initial value <strong>true</strong>.</p><p>Use <code>useEffect</code> to log <strong>Hook Ready</strong> once when the component mounts.</p><p>Render a paragraph with the text <strong>Hooks Mastered</strong>.</p><p>Render the <strong>HookSummary</strong> component inside <strong>App</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use an empty dependency array to run the effect once.</p><p>The state value does not need to change.</p></body>",
      "starterCode": {
        "/App.jsx": "import { useEffect, useState } from \"react\";\n\nfunction HookSummary() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      <HookSummary />\n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Hooks Mastered\\s*</p>",
      "output": "<p>Hooks Mastered</p>",
      "hintXp": 35
    }
}
,
  {
    "courseId": 4,
    "exerciseId": "state-as-a-system",
    "exerciseName": "State as a System",
    "chapterId": 2,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>As applications grow, state becomes more than a single value.</p><p style='margin-bottom:8px;'>State represents the living data of your interface.</p><p style='margin-bottom:8px;'>Treating state as a system means thinking about how pieces relate.</p><p style='margin-bottom:8px;'>Scattered state leads to bugs and confusion.</p><p style='margin-bottom:8px;'>Organized state leads to clarity and predictability.</p><p style='margin-bottom:8px;'>React encourages structuring state intentionally.</p><p style='margin-bottom:8px;'>Related values often belong together.</p><p style='margin-bottom:8px;'>Updates should describe what happened, not how.</p><p style='margin-bottom:8px;'>This mindset prepares you for advanced patterns.</p><p style='margin-bottom:8px;'>Understanding state as a system is a key intermediate skill.</p><p style='margin-bottom:8px;'>This lesson focuses on structure, not complexity.</p><p style='margin-bottom:8px;'>Build systems, not scattered pieces.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to think of state as a unit.</p><p>Create a component named <strong>SystemState</strong>.</p><p>Use <code>useState</code> to store an object with two properties: <strong>count</strong> set to <strong>0</strong> and <strong>status</strong> set to <strong>idle</strong>.</p><p>Render a paragraph showing <strong>Count: 0</strong> and another showing <strong>Status: idle</strong>.</p><p>Render the <strong>SystemState</strong> component inside <strong>App</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>You can store objects in state.</p><p>Use one <code>useState</code> call with an object.</p></body>",
      "starterCode": {
        "/App.jsx": "import { useState } from \"react\";\n\nfunction SystemState() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      <SystemState />\n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Count:\\s*0\\s*</p>[\\s\\S]*<p>\\s*Status:\\s*idle\\s*</p>",
      "output": "<p>Count: 0</p><p>Status: idle</p>",
      "hintXp": 35
    }
  }
,
  {
    "courseId": 4,
    "exerciseId": "usereducer-awakening",
    "exerciseName": "useReducer Awakening",
    "chapterId": 2,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>As state grows more complex, simple updates become fragile.</p><p style='margin-bottom:8px;'>React offers <code>useReducer</code> to manage complex state transitions.</p><p style='margin-bottom:8px;'>Instead of setting values directly, actions describe what happened.</p><p style='margin-bottom:8px;'>A reducer decides how state changes in response to actions.</p><p style='margin-bottom:8px;'>This pattern creates predictable and testable updates.</p><p style='margin-bottom:8px;'>Reducers centralize state logic in one place.</p><p style='margin-bottom:8px;'>They are ideal when many updates affect the same state.</p><p style='margin-bottom:8px;'>This awakening introduces a more disciplined approach.</p><p style='margin-bottom:8px;'>You now move from scattered updates to intentional transitions.</p><p style='margin-bottom:8px;'>Mastering <code>useReducer</code> unlocks scalable patterns.</p><p style='margin-bottom:8px;'>Prepare to control change with precision.</p><p style='margin-bottom:8px;'>The awakening begins now.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to awaken <code>useReducer</code>.</p><p>Create a reducer that handles one action type: <strong>increment</strong>.</p><p>The initial state should be <strong>{ count: 0 }</strong>.</p><p>Dispatch the <strong>increment</strong> action once.</p><p>Render a paragraph showing <strong>Count: 1</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>A reducer receives <code>(state, action)</code>.</p><p>Return a new state object.</p></body>",
      "starterCode": {
        "/App.jsx": "import { useReducer } from \"react\";\n\nfunction reducer(state, action) {\n  return state;\n}\n\nfunction ReducerAwakening() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      <ReducerAwakening />\n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Count:\\s*1\\s*</p>",
      "output": "<p>Count: 1</p>",
      "hintXp": 40
    }
  }
,
  {
    "courseId": 4,
    "exerciseId": "actions-and-reducers",
    "exerciseName": "Actions & Reducers",
    "chapterId": 2,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Reducers gain true power when actions carry intent.</p><p style='margin-bottom:8px;'>An action describes what happened, not how state changes.</p><p style='margin-bottom:8px;'>Reducers interpret actions and produce the next state.</p><p style='margin-bottom:8px;'>This separation keeps logic predictable.</p><p style='margin-bottom:8px;'>Actions are plain objects with a type field.</p><p style='margin-bottom:8px;'>They may also include additional data.</p><p style='margin-bottom:8px;'>Reducers must always return a new state.</p><p style='margin-bottom:8px;'>They must never mutate the existing state.</p><p style='margin-bottom:8px;'>Clear action naming improves readability.</p><p style='margin-bottom:8px;'>This trial strengthens disciplined state transitions.</p><p style='margin-bottom:8px;'>Think in actions, not assignments.</p><p style='margin-bottom:8px;'>Let reducers decide the outcome.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to handle multiple actions.</p><p>Create two action types: <strong>increment</strong> and <strong>decrement</strong>.</p><p>The initial state should be <strong>{ count: 1 }</strong>.</p><p>Dispatch the <strong>decrement</strong> action once.</p><p>Render a paragraph showing <strong>Count: 0</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use a switch statement inside the reducer.</p><p>Return a new state object for each action.</p></body>",
      "starterCode": {
        "/App.jsx": "import { useReducer } from \"react\";\n\nfunction reducer(state, action) {\n  return state;\n}\n\nfunction ActionsAndReducers() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      <ActionsAndReducers />\n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Count:\\s*0\\s*</p>",
      "output": "<p>Count: 0</p>",
      "hintXp": 40
    }
}
,
  {
    "courseId": 4,
    "exerciseId": "reducer-vs-usestate",
    "exerciseName": "Reducer vs useState",
    "chapterId": 2,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>With multiple tools comes the need for judgment.</p><p style='margin-bottom:8px;'><code>useState</code> is simple and perfect for isolated values.</p><p style='margin-bottom:8px;'><code>useReducer</code> shines when state logic becomes complex.</p><p style='margin-bottom:8px;'>Choosing the right tool keeps components readable.</p><p style='margin-bottom:8px;'>Overusing reducers can add unnecessary complexity.</p><p style='margin-bottom:8px;'>Overusing state setters can scatter logic.</p><p style='margin-bottom:8px;'>The key is understanding when complexity demands structure.</p><p style='margin-bottom:8px;'>This comparison builds architectural instinct.</p><p style='margin-bottom:8px;'>Experienced React developers choose intentionally.</p><p style='margin-bottom:8px;'>This trial sharpens your decision-making.</p><p style='margin-bottom:8px;'>Balance simplicity with scalability.</p><p style='margin-bottom:8px;'>Choose wisely, architect.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to compare approaches.</p><p>Create a component named <strong>StateComparison</strong>.</p><p>Use <code>useState</code> to store a value <strong>mode</strong> with initial value <strong>simple</strong>.</p><p>Render a paragraph showing <strong>Mode: simple</strong>.</p><p>This exercise confirms understanding of when simple state is enough.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Not every problem needs a reducer.</p><p>Use <code>useState</code> directly.</p></body>",
      "starterCode": {
        "/App.jsx": "import { useState } from \"react\";\n\nfunction StateComparison() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      <StateComparison />\n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Mode:\\s*simple\\s*</p>",
      "output": "<p>Mode: simple</p>",
      "hintXp": 35
    }
}
,
  {
    "courseId": 4,
    "exerciseId": "complex-state-trial",
    "exerciseName": "Complex State Trial",
    "chapterId": 2,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The realm now tests your ability to manage complexity.</p><p style='margin-bottom:8px;'>Complex state involves multiple related values.</p><p style='margin-bottom:8px;'>Managing them independently leads to fragile logic.</p><p style='margin-bottom:8px;'>Reducers help centralize and control these transitions.</p><p style='margin-bottom:8px;'>Each action represents a meaningful event.</p><p style='margin-bottom:8px;'>State changes must remain predictable.</p><p style='margin-bottom:8px;'>This trial pushes you to think in systems.</p><p style='margin-bottom:8px;'>Your goal is clarity, not cleverness.</p><p style='margin-bottom:8px;'>Organized state leads to stable applications.</p><p style='margin-bottom:8px;'>Face the trial with discipline.</p><p style='margin-bottom:8px;'>Only structured thinking survives here.</p><p style='margin-bottom:8px;'>Prove your control over complex state.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to manage related state together.</p><p>Use <code>useReducer</code> to manage state with <strong>count</strong> and <strong>status</strong>.</p><p>Initial state should be <strong>{ count: 0, status: 'idle' }</strong>.</p><p>Handle one action type <strong>activate</strong> that sets <strong>status</strong> to <strong>active</strong>.</p><p>Dispatch the <strong>activate</strong> action once.</p><p>Render two paragraphs showing <strong>Count: 0</strong> and <strong>Status: active</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Return a new state object from the reducer.</p><p>Do not mutate the existing state.</p></body>",
      "starterCode": {
        "/App.jsx": "import { useReducer } from \"react\";\n\nfunction reducer(state, action) {\n  return state;\n}\n\nfunction ComplexStateTrial() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      <ComplexStateTrial />\n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Count:\\s*0\\s*</p>[\\s\\S]*<p>\\s*Status:\\s*active\\s*</p>",
      "output": "<p>Count: 0</p><p>Status: active</p>",
      "hintXp": 45
    }
  }
,
  {
    "courseId": 4,
    "exerciseId": "state-mastery-check",
    "exerciseName": "State Mastery Check",
    "chapterId": 2,
    "exercisesContent": {
      "content": "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>You have explored state as structure, not just storage.</p><p style='margin-bottom:8px;'>You learned when to use reducers and when to keep things simple.</p><p style='margin-bottom:8px;'>You handled actions, transitions, and complex state safely.</p><p style='margin-bottom:8px;'>This final trial confirms your understanding.</p><p style='margin-bottom:8px;'>The goal is clarity, not complexity.</p><p style='margin-bottom:8px;'>Every decision should feel intentional.</p><p style='margin-bottom:8px;'>A true React architect controls state calmly.</p><p style='margin-bottom:8px;'>This mastery check ties all lessons together.</p><p style='margin-bottom:8px;'>Focus on correctness and structure.</p><p style='margin-bottom:8px;'>Prove your readiness to advance.</p><p style='margin-bottom:8px;'>The realm acknowledges your growth.</p><p style='margin-bottom:8px;'>Prepare for the next challenge.</p></body>",
      "task": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Your mission is to demonstrate state mastery.</p><p>Create a component named <strong>StateMaster</strong>.</p><p>Use <code>useReducer</code> with initial state <strong>{ value: 5 }</strong>.</p><p>Handle one action type <strong>double</strong> that doubles the value.</p><p>Dispatch the <strong>double</strong> action once.</p><p>Render a paragraph showing <strong>Value: 10</strong>.</p><p>Render the <strong>StateMaster</strong> component inside <strong>App</strong>.</p></body>",
      "hint": "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Return a new state object with <code>value * 2</code>.</p><p>Reducers must be pure functions.</p></body>",
      "starterCode": {
        "/App.jsx": "import { useReducer } from \"react\";\n\nfunction reducer(state, action) {\n  return state;\n}\n\nfunction StateMaster() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      <StateMaster />\n    </div>\n  );\n}"
      },
      "regex": "<p>\\s*Value:\\s*10\\s*</p>",
      "output": "<p>Value: 10</p>",
      "hintXp": 40
    }
  }
]



export async function GET(req: NextRequest) {
    DATA.forEach(async (item) => {
        await db.insert(ExerciseTable).values({
            courseId: item?.courseId, 
            chapterId: item?.chapterId,
            exerciseId: item?.exerciseId,
            exerciseName: item?.exerciseName,
            exercisesContent: item?.exercisesContent
        })
    })
    return NextResponse.json('Success')
}

