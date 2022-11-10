import Cards from "../partials/Cards"
import Footer from "../partials/Footer"
import Tabs from "../partials/Tabs"
import UserDetails from "../partials/UserDetails"

const UserDetailsScreen = () => {
  return (
    <div className="w-full pb-12">
        {/* User Details */}
        <UserDetails />
        {/* Tabs */}
        <Tabs />
        {/* Cards */}
        <Cards />
        {/* Footer */}
        <Footer />
    </div>
  )
}
export default UserDetailsScreen