"use strict"

import { sum } from "./shared/lib";

const root = document.querySelector('#root');

root.textContent = sum(6, -1).toString();