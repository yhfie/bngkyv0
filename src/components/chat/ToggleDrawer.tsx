import Icon from "../Icon";

export default function ToggleDrawer() {
  return (
    <label
      htmlFor="my-drawer-2"
      className="btn btn-ghost drawer-button left-2 top-2 px-0 md:hidden"
    >
      <Icon name="menu" />
    </label>
  );
}
