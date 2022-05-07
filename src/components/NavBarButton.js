function NavBarButton(){
    return(
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            More Options
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/about">
              About Me
            </a>
            <a class="dropdown-item" href="/blogs">
              Blog Posts
            </a>
            <a class="dropdown-item" href="/contact">
              Contact Me
            </a>
          </div>
        </div>
    )
}export default NavBarButton