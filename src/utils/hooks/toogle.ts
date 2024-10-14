import { useToggle } from "@vueuse/core";
import { computed } from "vue";

export const useSidebarMenuOptionHook = (defaultValue: string | null = null) => {
  // Initialize toggle state with useToggle and provide type safety for Ref
  const [currentSidebarMenuOptionOpened, _toggleSidebarMenuOption] = useToggle<string | null>(defaultValue);

  // Computed function to check if the sidebar with the given ID is open
  const isSidebarMenuOptionOpen = (id: string) => {
    return computed(() => currentSidebarMenuOptionOpened.value === id);
  };

  // Function to explicitly open a sidebar by its ID
  const openSidebarMenuOption = (id: string) => {
    currentSidebarMenuOptionOpened.value = id;
  };

  // Function to close the sidebar
  const closeSidebarMenuOption = () => {
    currentSidebarMenuOptionOpened.value = null;
  };

  const toggleSidebarMenuOption = (id: string) => {
    if (currentSidebarMenuOptionOpened.value == id) return closeSidebarMenuOption();
    openSidebarMenuOption(id);
  }

  return { currentSidebarMenuOptionOpened, toggleSidebarMenuOption, isSidebarMenuOptionOpen, openSidebarMenuOption, closeSidebarMenuOption };
};

// Instantiate the sidebar hook as a singleton instance for app-wide use
export const useAppSidebarMenuOption = useSidebarMenuOptionHook();
