// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

function TestAppPickerScreen() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        icon="apps"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}

export default TestAppPickerScreen;
