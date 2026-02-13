"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import axios from "axios";
import { Course } from "../(routes)/courses/_components/CourseList";

function Header() {
  const { user, isLoaded } = useUser();
  const path = usePathname();
  const { exerciseslug } = useParams();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only fetch courses if user is authenticated
    if (isLoaded && user) {
      GetCourses();
    } else if (isLoaded && !user) {
      // User is not logged in, don't fetch
      setLoading(false);
    }
  }, [isLoaded, user]);

  const GetCourses = async () => {
    try {
      const result = await axios.get("/api/course");
      console.log("API Response:", result.data);
      
      // Check if response has error (unauthenticated)
      if (result.data?.error) {
        console.error("API Error:", result.data.error);
        setCourses([]);
        return;
      }
      
      if (Array.isArray(result.data)) {
        setCourses(result.data);
      } else {
        console.error("API did not return an array:", result.data);
        setCourses([]);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full">
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
          <h2 className="font-bold text-4xl font-game">CodeBox</h2>
        </div>
      </Link>
      {/* Navbar */}
      {!exerciseslug && !loading && courses.length > 0 ? (
        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-game text-2xl">
                Courses
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]">
                  {courses.map((course, index) => (
                    <Link href={"/courses/" + course?.CourseId} key={index}>
                      <div className="p-2 hover:bg-accent rounded-2xl cursor-pointer">
                        <h2 className="text-2xl font-game">{course?.title}</h2>
                        <p className="text-lg text-gray-500 font-game">
                          {course?.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/projects"
                className="font-game text-2xl"
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/pricing"
                className="font-game text-2xl"
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="font-game text-2xl"
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : exerciseslug ? (
        <h2 className="font-game text-2xl">
          {exerciseslug?.toString()?.replaceAll("-", " ").toLocaleUpperCase()}
        </h2>
      ) : null}
      {/*sign up / login buttons */}
      {!user ? (
        <Link href="/sign-in">
          <Button className="font-game text-2xl" variant="pixel">
            Sign Up
          </Button>
        </Link>
      ) : (
        <div className="flex gap-4 items-center">
          <Link href="/dashboard">
            <Button className="font-game text-2xl" variant="pixel">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      )}
    </div>
  );
}

export default Header;