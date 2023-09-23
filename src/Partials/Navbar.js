import '../App.css';

const Navbar = () => {
return(
    <nav class="navbar bg-gray-900 border-gray-200">
  <div class="max-w-screen-xl flex mx-auto p-4 justify-center">
    <div className="flex flex-row gap-8 text-white place-self-center justify-center">
      <a href="#home" className="text-lg hover:text-xl font-semibold hover:text-blue-400">
        HOME
      </a>
      <a href="#about" className="text-lg hover:text-xl font-semibold hover:text-blue-400">
        ABOUT ME
      </a>
      {/* <a href="#skill" className="text-xl font-semibold hover:text-blue-400">
        SKILL
      </a> */}
      <a href="#projek" className="text-lg hover:text-xl font-semibold hover:text-blue-400">
        WORKS
      </a>
      <a href="#kontak" className="text-lg hover:text-xl font-semibold hover:text-blue-400">
        CONTACT
      </a>
    </div>
  </div>
</nav>
)
}

export default Navbar