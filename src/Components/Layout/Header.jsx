import React from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import bn from "../../utils/bemnames";
import routes from "../../Config/routes";
import { MdReorder, MdExitToApp, MdGroupAdd, MdSort } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../Assets/KelalLogo.png";

const bem = bn.create("header");

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isMobilePopoverOpen: false,
      isAboutPopoverOpen: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }
  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 600 });
  }
  toggleMobilePopover = () => {
    this.setState({
      isMobilePopoverOpen: !this.state.isMobilePopoverOpen,
    });
  };
  toggleAboutPopover = () => {
    this.setState({
      isAboutPopoverOpen: !this.state.isAboutPopoverOpen,
    });
  };

  render() {
    const isMobile = this.state.isMobile;
    let drawerClasses = "cr-header";
    if (this.props.scrolled) {
      drawerClasses = "scrolledAppBar";
    }

    return (
      <>
        <Navbar light fixed="top" expand className={drawerClasses}>
          <Link
            to={{ pathname: routes.homePage }}
            style={{ textDecoration: "none" }}
          >
            <Nav navbar>
              <img src={Logo} width="130" height="60" alt="" />{" "}
            </Nav>
          </Link>

          {isMobile ? (
            <Nav navbar className={bem.e("nav-right")}>
              <NavItem>
                <NavLink>
                  <Button>Let's Talk</Button>
                </NavLink>
              </NavItem>
              <NavItem className="mt-3 ml-4">
                <NavLink>
                  <MdSort className="text-primary" size={25} />{" "}
                  <h7 className="ml-2">MENU</h7>
                </NavLink>
              </NavItem>
            </Nav>
          ) : (
            <Nav navbar className={bem.e("nav-right")}>
              <Popover
                trigger="legacy"
                placement="bottom"
                isOpen={this.state.isMobilePopoverOpen}
                toggle={this.toggleMobilePopover}
                target="MobilePopover"
                className="p-5 border"
              >
                <PopoverBody className="p-1">
                  <ListGroup flush>
                    <ListGroupItem
                      tag="button"
                      action
                      className="border-light"
                      onClick={() => this.props.toggle("signIn")}
                    >
                      <MdExitToApp className="mr-2" /> {"  "} SignIn
                    </ListGroupItem>
                    <ListGroupItem
                      tag="button"
                      action
                      onClick={() => this.props.toggle("signUp")}
                    >
                      <MdGroupAdd className="mr-2" /> Let's Talk
                    </ListGroupItem>
                  </ListGroup>
                </PopoverBody>
              </Popover>
              <NavItem id="MobilePopover">
                <NavLink>
                  <MdReorder size={20} />
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Navbar>
      </>
    );
  }
}

export default Header;
