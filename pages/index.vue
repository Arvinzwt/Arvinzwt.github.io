<template>
    <!--index-->
    <el-main class="wmm-index">
        <div id="container"></div>
        <div id="menu">
            <button id="table">TABLE</button>
            <button id="sphere">SPHERE</button>
            <button id="helix">HELIX</button>
            <button id="grid">GRID</button>
        </div>
    </el-main>
</template>

<script>
import * as THREE from '@/assets/lib/three/three.module';
import {TWEEN} from '@/assets/lib/three/tween.module.min.js';
import {TrackballControls} from '@/assets/lib/three/TrackballControls.js';
import {CSS3DRenderer, CSS3DObject} from '@/assets/lib/three/CSS3DRenderer.js';

export default {
    layout: 'blank',
    data() {
        return {
            elements: [
                {"number": 1, "symbol": "H", "details": "Hydrogen", "quality": "1.00794", "position": [1, 1]},
                {"number": 2, "symbol": "He", "details": "Helium", "quality": "4.002602", "position": [18, 1]},
                {"number": 3, "symbol": "Li", "details": "Lithium", "quality": "6.941", "position": [1, 2]},
                {"number": 4, "symbol": "Be", "details": "Beryllium", "quality": "9.012182", "position": [2, 2]},
                {"number": 5, "symbol": "B", "details": "Boron", "quality": "10.811", "position": [13, 2]},
                {"number": 6, "symbol": "C", "details": "Carbon", "quality": "12.0107", "position": [14, 2]},
                {"number": 7, "symbol": "N", "details": "Nitrogen", "quality": "14.0067", "position": [15, 2]},
                {"number": 8, "symbol": "O", "details": "Oxygen", "quality": "15.9994", "position": [16, 2]},
                {"number": 9, "symbol": "F", "details": "Fluorine", "quality": "18.9984032", "position": [17, 2]},
                {"number": 10, "symbol": "Ne", "details": "Neon", "quality": "20.1797", "position": [18, 2]},
                {"number": 11, "symbol": "Na", "details": "Sodium", "quality": "22.98976...", "position": [1, 3]},
                {"number": 12, "symbol": "Mg", "details": "Magnesium", "quality": "24.305", "position": [2, 3]},
                {"number": 13, "symbol": "Al", "details": "Aluminium", "quality": "26.9815386", "position": [13, 3]},
                {"number": 14, "symbol": "Si", "details": "Silicon", "quality": "28.0855", "position": [14, 3]},
                {"number": 15, "symbol": "P", "details": "Phosphorus", "quality": "30.973762", "position": [15, 3]},
                {"number": 16, "symbol": "S", "details": "Sulfur", "quality": "32.065", "position": [16, 3]},
                {"number": 17, "symbol": "Cl", "details": "Chlorine", "quality": "35.453", "position": [17, 3]},
                {"number": 18, "symbol": "Ar", "details": "Argon", "quality": "39.948", "position": [18, 3]},
                {"number": 19, "symbol": "K", "details": "Potassium", "quality": "39.948", "position": [1, 4]},
                {"number": 20, "symbol": "Ca", "details": "Calcium", "quality": "40.078", "position": [2, 4]},
                {"number": 21, "symbol": "Sc", "details": "Scandium", "quality": "44.955912", "position": [3, 4]},
                {"number": 22, "symbol": "Ti", "details": "Titanium", "quality": "47.867", "position": [4, 4]},
                {"number": 23, "symbol": "V", "details": "Vanadium", "quality": "50.9415", "position": [5, 4]},
                {"number": 24, "symbol": "Cr", "details": "Chromium", "quality": "51.9961", "position": [6, 4]},
                {"number": 25, "symbol": "Mn", "details": "Manganese", "quality": "54.938045", "position": [7, 4]},
                {"number": 26, "symbol": "Fe", "details": "Iron", "quality": "55.845", "position": [8, 4]},
                {"number": 27, "symbol": "Co", "details": "Cobalt", "quality": "58.933195", "position": [9, 4]},
                {"number": 28, "symbol": "Ni", "details": "Nickel", "quality": "58.6934", "position": [10, 4]},
                {"number": 29, "symbol": "Cu", "details": "Copper", "quality": "63.546", "position": [11, 4]},
                {"number": 30, "symbol": "Zn", "details": "Zinc", "quality": "65.38", "position": [12, 4]},
                {"number": 31, "symbol": "Ga", "details": "Gallium", "quality": "69.723", "position": [13, 4]},
                {"number": 32, "symbol": "Ge", "details": "Germanium", "quality": "72.63", "position": [14, 4]},
                {"number": 33, "symbol": "As", "details": "Arsenic", "quality": "74.9216", "position": [15, 4]},
                {"number": 34, "symbol": "Se", "details": "Selenium", "quality": "78.96", "position": [16, 4]},
                {"number": 35, "symbol": "Br", "details": "Bromine", "quality": "79.904", "position": [17, 4]},
                {"number": 36, "symbol": "Kr", "details": "Krypton", "quality": "83.798", "position": [18, 4]},
                {"number": 37, "symbol": "Rb", "details": "Rubidium", "quality": "85.4678", "position": [1, 5]},
                {"number": 38, "symbol": "Sr", "details": "Strontium", "quality": "87.62", "position": [2, 5]},
                {"number": 39, "symbol": "Y", "details": "Yttrium", "quality": "88.90585", "position": [3, 5]},
                {"number": 40, "symbol": "Zr", "details": "Zirconium", "quality": "91.224", "position": [4, 5]},
                {"number": 41, "symbol": "Nb", "details": "Niobium", "quality": "92.90628", "position": [5, 5]},
                {"number": 42, "symbol": "Mo", "details": "Molybdenum", "quality": "95.96", "position": [6, 5]},
                {"number": 43, "symbol": "Tc", "details": "Technetium", "quality": "(98)", "position": [7, 5]},
                {"number": 44, "symbol": "Ru", "details": "Ruthenium", "quality": "101.07", "position": [8, 5]},
                {"number": 45, "symbol": "Rh", "details": "Rhodium", "quality": "102.9055", "position": [9, 5]},
                {"number": 46, "symbol": "Pd", "details": "Palladium", "quality": "106.42", "position": [10, 5]},
                {"number": 47, "symbol": "Ag", "details": "Silver", "quality": "107.8682", "position": [11, 5]},
                {"number": 48, "symbol": "Cd", "details": "Cadmium", "quality": "112.411", "position": [12, 5]},
                {"number": 49, "symbol": "In", "details": "Indium", "quality": "114.818", "position": [13, 5]},
                {"number": 50, "symbol": "Sn", "details": "Tin", "quality": "118.71", "position": [14, 5]},
                {"number": 51, "symbol": "Sb", "details": "Antimony", "quality": "121.76", "position": [15, 5]},
                {"number": 52, "symbol": "Te", "details": "Tellurium", "quality": "127.6", "position": [16, 5]},
                {"number": 53, "symbol": "I", "details": "Iodine", "quality": "126.90447", "position": [17, 5]},
                {"number": 54, "symbol": "Xe", "details": "Xenon", "quality": "131.293", "position": [18, 5]},
                {"number": 55, "symbol": "Cs", "details": "Caesium", "quality": "132.9054", "position": [1, 6]},
                {"number": 56, "symbol": "Ba", "details": "Barium", "quality": "132.9054", "position": [2, 6]},
                {"number": 57, "symbol": "La", "details": "Lanthanum", "quality": "138.90547", "position": [4, 9]},
                {"number": 58, "symbol": "Ce", "details": "Cerium", "quality": "140.116", "position": [5, 9]},
                {"number": 59, "symbol": "Pr", "details": "Praseodymium", "quality": "140.90765", "position": [6, 9]},
                {"number": 60, "symbol": "Nd", "details": "Neodymium", "quality": "144.242", "position": [7, 9]},
                {"number": 61, "symbol": "Pm", "details": "Promethium", "quality": "(145)", "position": [8, 9]},
                {"number": 62, "symbol": "Sm", "details": "Samarium", "quality": "150.36", "position": [9, 9]},
                {"number": 63, "symbol": "Eu", "details": "Europium", "quality": "151.964", "position": [10, 9]},
                {"number": 64, "symbol": "Gd", "details": "Gadolinium", "quality": "157.25", "position": [11, 9]},
                {"number": 65, "symbol": "Tb", "details": "Terbium", "quality": "158.92535", "position": [12, 9]},
                {"number": 66, "symbol": "Dy", "details": "Dysprosium", "quality": "162.5", "position": [13, 9]},
                {"number": 67, "symbol": "Ho", "details": "Holmium", "quality": "164.93032", "position": [14, 9]},
                {"number": 68, "symbol": "Er", "details": "Erbium", "quality": "167.259", "position": [15, 9]},
                {"number": 69, "symbol": "Tm", "details": "Thulium", "quality": "168.93421", "position": [16, 9]},
                {"number": 70, "symbol": "Yb", "details": "Ytterbium", "quality": "173.054", "position": [17, 9]},
                {"number": 71, "symbol": "Lu", "details": "Lutetium", "quality": "174.9668", "position": [18, 9]},
                {"number": 72, "symbol": "Hf", "details": "Hafnium", "quality": "178.49", "position": [4, 6]},
                {"number": 73, "symbol": "Ta", "details": "Tantalum", "quality": "180.94788", "position": [5, 6]},
                {"number": 74, "symbol": "W", "details": "Tungsten", "quality": "183.84", "position": [6, 6]},
                {"number": 75, "symbol": "Re", "details": "Rhenium", "quality": "186.207", "position": [7, 6]},
                {"number": 76, "symbol": "Os", "details": "Osmium", "quality": "190.23", "position": [8, 6]},
                {"number": 77, "symbol": "Ir", "details": "Iridium", "quality": "192.217", "position": [9, 6]},
                {"number": 78, "symbol": "Pt", "details": "Platinum", "quality": "195.084", "position": [10, 6]},
                {"number": 79, "symbol": "Au", "details": "Gold", "quality": "196.966569", "position": [11, 6]},
                {"number": 80, "symbol": "Hg", "details": "Mercury", "quality": "200.59", "position": [12, 6]},
                {"number": 81, "symbol": "Tl", "details": "Thallium", "quality": "204.3833", "position": [13, 6]},
                {"number": 82, "symbol": "Pb", "details": "Lead", "quality": "207.2", "position": [14, 6]},
                {"number": 83, "symbol": "Bi", "details": "Bismuth", "quality": "208.9804", "position": [15, 6]},
                {"number": 84, "symbol": "Po", "details": "Polonium", "quality": "(209)", "position": [16, 6]},
                {"number": 85, "symbol": "At", "details": "Astatine", "quality": "(210)", "position": [17, 6]},
                {"number": 86, "symbol": "Rn", "details": "Radon", "quality": "(222)", "position": [18, 6]},
                {"number": 87, "symbol": "Fr", "details": "Francium", "quality": "(223)", "position": [1, 7]},
                {"number": 88, "symbol": "Ra", "details": "Radium", "quality": "(226)", "position": [2, 7]},
                {"number": 89, "symbol": "Ac", "details": "Actinium", "quality": "(227)", "position": [4, 10]},
                {"number": 90, "symbol": "Th", "details": "Thorium", "quality": "232.03806", "position": [5, 10]},
                {"number": 91, "symbol": "Pa", "details": "Protactinium", "quality": "231.0588", "position": [6, 10]},
                {"number": 92, "symbol": "U", "details": "Uranium", "quality": "238.02891", "position": [7, 10]},
                {"number": 93, "symbol": "Np", "details": "Neptunium", "quality": "(237)", "position": [8, 10]},
                {"number": 94, "symbol": "Pu", "details": "Plutonium", "quality": "(244)", "position": [9, 10]},
                {"number": 95, "symbol": "Am", "details": "Americium", "quality": "(243)", "position": [10, 10]},
                {"number": 96, "symbol": "Cm", "details": "Curium", "quality": "(247)", "position": [11, 10]},
                {"number": 97, "symbol": "Bk", "details": "Berkelium", "quality": "(247)", "position": [12, 10]},
                {"number": 98, "symbol": "Cf", "details": "Californium", "quality": "(251)", "position": [13, 10]},
                {"number": 99, "symbol": "Es", "details": "Einstenium", "quality": "(252)", "position": [14, 10]},
                {"number": 100, "symbol": "Fm", "details": "Fermium", "quality": "(257)", "position": [15, 10]},
                {"number": 101, "symbol": "Md", "details": "Mendelevium", "quality": "(258)", "position": [16, 10]},
                {"number": 102, "symbol": "No", "details": "Nobelium", "quality": "(259)", "position": [17, 10]},
                {"number": 103, "symbol": "Lr", "details": "Lawrencium", "quality": "(262)", "position": [18, 10]},
                {"number": 104, "symbol": "Rf", "details": "Rutherfordium", "quality": "(267)", "position": [4, 7]},
                {"number": 105, "symbol": "Db", "details": "Dubnium", "quality": "(268)", "position": [5, 7]},
                {"number": 106, "symbol": "Sg", "details": "Seaborgium", "quality": "(271)", "position": [6, 7]},
                {"number": 107, "symbol": "Bh", "details": "Bohrium", "quality": "(272)", "position": [7, 7]},
                {"number": 108, "symbol": "Hs", "details": "Hassium", "quality": "(270)", "position": [8, 7]},
                {"number": 109, "symbol": "Mt", "details": "Meitnerium", "quality": "(276)", "position": [9, 7]},
                {"number": 110, "symbol": "Ds", "details": "Darmstadium", "quality": "(281)", "position": [10, 7]},
                {"number": 111, "symbol": "Rg", "details": "Roentgenium", "quality": "(280)", "position": [11, 7]},
                {"number": 112, "symbol": "Cn", "details": "Copernicium", "quality": "(285)", "position": [12, 7]},
                {"number": 113, "symbol": "Nh", "details": "Nihonium", "quality": "(286)", "position": [13, 7]},
                {"number": 114, "symbol": "Fl", "details": "Flerovium", "quality": "(289)", "position": [14, 7]},
                {"number": 115, "symbol": "Mc", "details": "Moscovium", "quality": "(290)", "position": [15, 7]},
                {"number": 116, "symbol": "Lv", "details": "Livermorium", "quality": "(293)", "position": [16, 7]},
                {"number": 117, "symbol": "Ts", "details": "Tennessine", "quality": "(294)", "position": [17, 7]},
                {"number": 118, "symbol": "Og", "details": "Oganesson", "quality": "(294)", "position": [18, 7]}
            ],
        }
    },
    mounted() {
        var table = [
            "H", "Hydrogen", "1.00794", 1, 1,
            "He", "Helium", "4.002602", 18, 1,
            "Li", "Lithium", "6.941", 1, 2,
            "Be", "Beryllium", "9.012182", 2, 2,
            "B", "Boron", "10.811", 13, 2,
            "C", "Carbon", "12.0107", 14, 2,
            "N", "Nitrogen", "14.0067", 15, 2,
            "O", "Oxygen", "15.9994", 16, 2,
            "F", "Fluorine", "18.9984032", 17, 2,
            "Ne", "Neon", "20.1797", 18, 2,
            "Na", "Sodium", "22.98976...", 1, 3,
            "Mg", "Magnesium", "24.305", 2, 3,
            "Al", "Aluminium", "26.9815386", 13, 3,
            "Si", "Silicon", "28.0855", 14, 3,
            "P", "Phosphorus", "30.973762", 15, 3,
            "S", "Sulfur", "32.065", 16, 3,
            "Cl", "Chlorine", "35.453", 17, 3,
            "Ar", "Argon", "39.948", 18, 3,
            "K", "Potassium", "39.948", 1, 4,
            "Ca", "Calcium", "40.078", 2, 4,
            "Sc", "Scandium", "44.955912", 3, 4,
            "Ti", "Titanium", "47.867", 4, 4,
            "V", "Vanadium", "50.9415", 5, 4,
            "Cr", "Chromium", "51.9961", 6, 4,
            "Mn", "Manganese", "54.938045", 7, 4,
            "Fe", "Iron", "55.845", 8, 4,
            "Co", "Cobalt", "58.933195", 9, 4,
            "Ni", "Nickel", "58.6934", 10, 4,
            "Cu", "Copper", "63.546", 11, 4,
            "Zn", "Zinc", "65.38", 12, 4,
            "Ga", "Gallium", "69.723", 13, 4,
            "Ge", "Germanium", "72.63", 14, 4,
            "As", "Arsenic", "74.9216", 15, 4,
            "Se", "Selenium", "78.96", 16, 4,
            "Br", "Bromine", "79.904", 17, 4,
            "Kr", "Krypton", "83.798", 18, 4,
            "Rb", "Rubidium", "85.4678", 1, 5,
            "Sr", "Strontium", "87.62", 2, 5,
            "Y", "Yttrium", "88.90585", 3, 5,
            "Zr", "Zirconium", "91.224", 4, 5,
            "Nb", "Niobium", "92.90628", 5, 5,
            "Mo", "Molybdenum", "95.96", 6, 5,
            "Tc", "Technetium", "(98)", 7, 5,
            "Ru", "Ruthenium", "101.07", 8, 5,
            "Rh", "Rhodium", "102.9055", 9, 5,
            "Pd", "Palladium", "106.42", 10, 5,
            "Ag", "Silver", "107.8682", 11, 5,
            "Cd", "Cadmium", "112.411", 12, 5,
            "In", "Indium", "114.818", 13, 5,
            "Sn", "Tin", "118.71", 14, 5,
            "Sb", "Antimony", "121.76", 15, 5,
            "Te", "Tellurium", "127.6", 16, 5,
            "I", "Iodine", "126.90447", 17, 5,
            "Xe", "Xenon", "131.293", 18, 5,
            "Cs", "Caesium", "132.9054", 1, 6,
            "Ba", "Barium", "132.9054", 2, 6,
            "La", "Lanthanum", "138.90547", 4, 9,
            "Ce", "Cerium", "140.116", 5, 9,
            "Pr", "Praseodymium", "140.90765", 6, 9,
            "Nd", "Neodymium", "144.242", 7, 9,
            "Pm", "Promethium", "(145)", 8, 9,
            "Sm", "Samarium", "150.36", 9, 9,
            "Eu", "Europium", "151.964", 10, 9,
            "Gd", "Gadolinium", "157.25", 11, 9,
            "Tb", "Terbium", "158.92535", 12, 9,
            "Dy", "Dysprosium", "162.5", 13, 9,
            "Ho", "Holmium", "164.93032", 14, 9,
            "Er", "Erbium", "167.259", 15, 9,
            "Tm", "Thulium", "168.93421", 16, 9,
            "Yb", "Ytterbium", "173.054", 17, 9,
            "Lu", "Lutetium", "174.9668", 18, 9,
            "Hf", "Hafnium", "178.49", 4, 6,
            "Ta", "Tantalum", "180.94788", 5, 6,
            "W", "Tungsten", "183.84", 6, 6,
            "Re", "Rhenium", "186.207", 7, 6,
            "Os", "Osmium", "190.23", 8, 6,
            "Ir", "Iridium", "192.217", 9, 6,
            "Pt", "Platinum", "195.084", 10, 6,
            "Au", "Gold", "196.966569", 11, 6,
            "Hg", "Mercury", "200.59", 12, 6,
            "Tl", "Thallium", "204.3833", 13, 6,
            "Pb", "Lead", "207.2", 14, 6,
            "Bi", "Bismuth", "208.9804", 15, 6,
            "Po", "Polonium", "(209)", 16, 6,
            "At", "Astatine", "(210)", 17, 6,
            "Rn", "Radon", "(222)", 18, 6,
            "Fr", "Francium", "(223)", 1, 7,
            "Ra", "Radium", "(226)", 2, 7,
            "Ac", "Actinium", "(227)", 4, 10,
            "Th", "Thorium", "232.03806", 5, 10,
            "Pa", "Protactinium", "231.0588", 6, 10,
            "U", "Uranium", "238.02891", 7, 10,
            "Np", "Neptunium", "(237)", 8, 10,
            "Pu", "Plutonium", "(244)", 9, 10,
            "Am", "Americium", "(243)", 10, 10,
            "Cm", "Curium", "(247)", 11, 10,
            "Bk", "Berkelium", "(247)", 12, 10,
            "Cf", "Californium", "(251)", 13, 10,
            "Es", "Einstenium", "(252)", 14, 10,
            "Fm", "Fermium", "(257)", 15, 10,
            "Md", "Mendelevium", "(258)", 16, 10,
            "No", "Nobelium", "(259)", 17, 10,
            "Lr", "Lawrencium", "(262)", 18, 10,
            "Rf", "Rutherfordium", "(267)", 4, 7,
            "Db", "Dubnium", "(268)", 5, 7,
            "Sg", "Seaborgium", "(271)", 6, 7,
            "Bh", "Bohrium", "(272)", 7, 7,
            "Hs", "Hassium", "(270)", 8, 7,
            "Mt", "Meitnerium", "(276)", 9, 7,
            "Ds", "Darmstadium", "(281)", 10, 7,
            "Rg", "Roentgenium", "(280)", 11, 7,
            "Cn", "Copernicium", "(285)", 12, 7,
            "Nh", "Nihonium", "(286)", 13, 7,
            "Fl", "Flerovium", "(289)", 14, 7,
            "Mc", "Moscovium", "(290)", 15, 7,
            "Lv", "Livermorium", "(293)", 16, 7,
            "Ts", "Tennessine", "(294)", 17, 7,
            "Og", "Oganesson", "(294)", 18, 7
        ];

        var camera, scene, renderer;
        var controls;

        var objects = [];
        var targets = { table: [], sphere: [], helix: [], grid: [] };

        init();
        animate();

        function init() {

            camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
            camera.position.z = 3000;

            scene = new THREE.Scene();

            // table

            for (var i = 0; i < table.length; i += 5) {

                var element = document.createElement( 'div' );
                element.className = 'element';
                element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

                var number = document.createElement( 'div' );
                number.className = 'number';
                number.textContent = ( i / 5 ) + 1;
                element.appendChild( number );

                var symbol = document.createElement( 'div' );
                symbol.className = 'symbol';
                symbol.textContent = table[i];
                element.appendChild( symbol );

                var details = document.createElement( 'div' );
                details.className = 'details';
                details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
                element.appendChild( details );

                var object = new CSS3DObject( element );
                object.position.x = Math.random() * 4000 - 2000;
                object.position.y = Math.random() * 4000 - 2000;
                object.position.z = Math.random() * 4000 - 2000;
                scene.add( object );

                objects.push( object );

                //

                var object = new THREE.Object3D();
                object.position.x = ( table[i + 3] * 140 ) - 1330;
                object.position.y = - ( table[i + 4] * 180 ) + 990;

                targets.table.push( object );

            }

            // sphere

            var vector = new THREE.Vector3();

            for (var i = 0, l = objects.length; i < l; i ++) {

                var phi = Math.acos( - 1 + ( 2 * i ) / l );
                var theta = Math.sqrt( l * Math.PI ) * phi;

                var object = new THREE.Object3D();

                object.position.setFromSphericalCoords( 800, phi, theta );

                vector.copy( object.position ).multiplyScalar( 2 );

                object.lookAt( vector );

                targets.sphere.push( object );

            }

            // helix

            var vector = new THREE.Vector3();

            for (var i = 0, l = objects.length; i < l; i ++) {

                var theta = i * 0.175 + Math.PI;
                var y = - ( i * 8 ) + 450;

                var object = new THREE.Object3D();

                object.position.setFromCylindricalCoords( 900, theta, y );

                vector.x = object.position.x * 2;
                vector.y = object.position.y;
                vector.z = object.position.z * 2;

                object.lookAt( vector );

                targets.helix.push( object );

            }

            // grid

            for (var i = 0; i < objects.length; i ++) {

                var object = new THREE.Object3D();

                object.position.x = ( ( i % 5 ) * 400 ) - 800;
                object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
                object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

                targets.grid.push( object );

            }

            //

            renderer = new CSS3DRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById( 'container' ).appendChild( renderer.domElement );

            //

            controls = new TrackballControls( camera, renderer.domElement );
            controls.minDistance = 500;
            controls.maxDistance = 6000;
            controls.addEventListener( 'change', render );

            var button = document.getElementById( 'table' );
            button.addEventListener( 'click', function () {

                transform( targets.table, 2000 );

            }, false );

            var button = document.getElementById( 'sphere' );
            button.addEventListener( 'click', function () {

                transform( targets.sphere, 2000 );

            }, false );

            var button = document.getElementById( 'helix' );
            button.addEventListener( 'click', function () {

                transform( targets.helix, 2000 );

            }, false );

            var button = document.getElementById( 'grid' );
            button.addEventListener( 'click', function () {

                transform( targets.grid, 2000 );

            }, false );

            transform( targets.table, 2000 );

            //

            window.addEventListener( 'resize', onWindowResize, false );

        }

        function transform( targets, duration ) {

            TWEEN.removeAll();

            for (var i = 0; i < objects.length; i ++) {

                var object = objects[i];
                var target = targets[i];

                new TWEEN.Tween( object.position )
                        .to( {
                            x: target.position.x, y: target.position.y, z: target.position.z
                        }, Math.random() * duration + duration )
                        .easing( TWEEN.Easing.Exponential.InOut )
                        .start();

                new TWEEN.Tween( object.rotation )
                        .to( {
                            x: target.rotation.x, y: target.rotation.y, z: target.rotation.z
                        }, Math.random() * duration + duration )
                        .easing( TWEEN.Easing.Exponential.InOut )
                        .start();

            }

            new TWEEN.Tween( this )
                    .to( {}, duration * 2 )
                    .onUpdate( render )
                    .start();

        }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

            render();

        }

        function animate() {

            requestAnimationFrame( animate );

            TWEEN.update();

            controls.update();

        }

        function render() {

            renderer.render( scene, camera );

        }
    }
}
</script>

<style lang="scss">
.wmm-index {
    .element {
        width: 120px;
        height: 160px;
        box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.5);
        border: 1px solid rgba(127, 255, 255, 0.25);
        font-family: Helvetica, sans-serif;
        text-align: center;
        line-height: normal;
        cursor: default;
    }

    .element:hover {
        box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.75);
        border: 1px solid rgba(127, 255, 255, 0.75);
    }

    .element .number {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 12px;
        color: rgba(127, 255, 255, 0.75);
    }

    .element .symbol {
        position: absolute;
        top: 40px;
        left: 0px;
        right: 0px;
        font-size: 60px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.75);
        text-shadow: 0 0 10px rgba(0, 255, 255, 0.95);
    }

    .element .details {
        position: absolute;
        bottom: 15px;
        left: 0px;
        right: 0px;
        font-size: 12px;
        color: rgba(127, 255, 255, 0.75);
    }

    #menu {
        position: absolute;
        bottom: 20px;
        width: 100%;
        text-align: center;
    }

    button {
        color: rgba(127, 255, 255, 0.75);
        background: transparent;
        outline: 1px solid rgba(127, 255, 255, 0.75);
        border: 0px;
        padding: 5px 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: rgba(0, 255, 255, 0.5);
    }

    button:active {
        color: #000000;
        background-color: rgba(0, 255, 255, 0.75);
    }
}
</style>
