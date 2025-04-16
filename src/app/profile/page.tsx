import type { Metadata } from "next"
import ProfileDashboard from "@/app/components/profile/profile-dashboard"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer"
import ScrollToTop from "../components/scroll-to-top"
import Switcher from "../components/switcher"

export const metadata: Metadata = {
  title: "User Profile | Edupath",
  description: "Manage your Edupath profile, courses, and account settings",
}

export default function ProfilePage() {
  return (
  <>
     <Navbar navlight={false} tagline={false}/>
    <div className="container mx-auto py-[50px]">
      <ProfileDashboard />
    </div>

        <Footer/>

        <ScrollToTop/>
        <Switcher/>
  </>
  )
}

