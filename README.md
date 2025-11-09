# prodev-mobile-app
Expo Router, React Components, and NativeWind Integration in React Native
Understanding Expo Router
Expo Router is a powerful file-based routing system for React Native applications built on top of Expo. It simplifies navigation by allowing developers to define screens using a folder structure, similar to Next.js for web development. Instead of manually configuring navigation stacks, developers can create files in the app/ directory, and Expo Router automatically generates the necessary routes.

# Key Features of Expo Router:
File-based Routing: Screens are defined as files inside app/ (e.g., app/index.tsx, app/home.tsx).
Automatic Linking: No need to manually define routes; the file structure determines navigation paths.
Deep Linking Support: Works seamlessly with URL-based navigation, enabling deep linking for web and mobile.
Nested and Dynamic Routes: Supports folder-based nesting (app/profile/[id].tsx) to handle dynamic content.
Integration with Expo CLI: Works efficiently with Expo-managed projects for smooth development.
React Components in Expo Router
React components form the backbone of a React Native application. In an Expo Router environment, screens and UI elements are built using functional components that return JSX.

Best Practices for React Components in Expo Router:
Modular and Reusable Components: Create separate components for UI elements to promote reusability (components/Button.tsx).
State Management: Use React’s useState and useEffect hooks for managing local component state.
Lazy Loading: Optimize performance by dynamically importing screens when needed using React.lazy().
Props and Context: Pass props efficiently and use React Context for managing global state.
Error Boundaries: Implement error-handling components to prevent crashes due to unexpected errors.
NativeWind Integration with Expo Router
NativeWind is a utility-first styling framework for React Native that brings the simplicity of Tailwind CSS. It enables developers to style components using class names, reducing the need for inline styles or StyleSheet objects.

Setting Up NativeWind with Expo Router
It is important to review the setup guide from the official website
Why Configuration Files Matter
Proper configuration is crucial to ensure seamless integration of tools like Expo Router, NativeWind, and vector icons. Configuration files help in:
- Defining Tailwind CSS Classes: tailwind.config.js specifies the styles that NativeWind should process.
- Routing Behavior: expo-router.config.js can be used to customize navigation behavior.
- Environment Variables: .env files store sensitive information securely.
- Metro Bundler Configuration: metro.config.js helps optimize asset loading and module resolution.

Best Practices for Expo Router CLI and Expo Vectors
Use expo-router-cli for Development:

# Optimizing Navigation Performance:

Use useMemo() and useCallback() to prevent unnecessary re-renders in navigation components.
Avoid excessive re-renders by managing navigation state efficiently.
Expo Vector Icons Integration:
Expo provides @expo/vector-icons, a library containing popular icon sets like FontAwesome and Material Icons.

Install the package:
 npm install @expo/vector-icons
Use in components:

 import { View } from "react-native";
 import { MaterialIcons } from "@expo/vector-icons";

 export default function HomeScreen() {
   return (
     <View>
       <MaterialIcons name="home" size={32} color="black" />
     </View>
   );
 }
Make reference to the Figma page here for more details on the mock up
https://www.figma.com/design/E2BRqdPcKkrnX6hLGPto8Z/Project-Airbnb?node-id=1-2&p=f
# 📝 Project Assessment (Hybrid)
Your project will be evaluated primarily through manual reviews. To ensure you receive your full score, please:

✅ Complete your project on time
📄 Submit all required files
🔗 Generate your review link
👥 Have your peers review your work

An auto-check will also be in place to verify the presence of core files needed for manual review.

# ⏰ Important Note
If the deadline passes, you won’t be able to generate your review link—so be sure to submit on time!

We’re here to support your learning journey. Happy coding! ✨

# Here are some additional resources to guide you
https://docs.expo.dev/router/basics/navigation/

https://docs.expo.dev/router/basics/navigation/

https://www.figma.com/design/FHpsCUXuQuURQf58XprBtY/Coinpay-Fintech-Finance-Mobile-App-UI-kit-(Community)-(Community)?node-id=685-10519&p=f&t=p6UxlRnCJwRDly7W-0

https://www.figma.com/design/RhP1APTkYyHY3DTClVv5gU/Coffee-Shop-Mobile-App-Design--Community-?node-id=421-1289&t=q4U5XKsz5MhdEWXC-0

https://www.figma.com/design/FbIovZFuJAJ5Xo4gyTTBQj/Online-Groceries-App-UI--Community-?node-id=1-2&p=f&t=scCpDX7KJnKY6Xtc-0
