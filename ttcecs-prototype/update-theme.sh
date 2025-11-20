#!/bin/bash

# Update ScrollHandMoney
sed -i '' "1 s|^.*$|// components/ScrollHandMoney.js - Theme-Aware|" components/ScrollHandMoney.js
sed -i '' "3 a\\
import { useState } from 'react';
" components/ScrollHandMoney.js

# Update Contact
sed -i '' 's|className="py-24 bg-gradient-to-b from-white to-\[#F5FAFF\]|className="py-24 transition-colors duration-300" style={{ background: isDark ? "linear-gradient(to-b, #071428, #03121f)" : "linear-gradient(to-b, white, #F5FAFF)" }}|g' components/Contact.js

echo "✅ Updated components for theme switching"
