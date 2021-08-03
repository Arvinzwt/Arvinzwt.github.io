<template>
    <!--index-->
    <el-main class="wmm-index">
        <div id="container">
            <div class="article" v-for="(item,index) in articles" :key="index">
                <div class="title">{{ item.title }}</div>
                <div class="description">{{ item.description }}</div>
                <div class="createdAt">{{ $utils.formatDate(item.createdAt) }}</div>
            </div>
        </div>
    </el-main>
</template>

<script>
import * as THREE from 'three';
import {TWEEN} from 'three/examples/jsm/libs/tween.module.min.js';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls.js';
import {CSS3DRenderer, CSS3DObject} from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export default {
    // layout: 'blank',
    async asyncData({$content}) {
        return {
            articles: await $content({deep: true}).fetch()
        }
    },
    data() {
        return {
            camera: null,
            scene: null,
            renderer: null,
            controls: null,
            elements: [],
            targets: {table: [], sphere: [], helix: [], grid: []}
        }
    },
    mounted() {
        this.initHandle();
        this.animate();
        this.transform('table')
    },
    methods: {
        /**
         * 初始化数据
         */
        initHandle() {
            let scene = new THREE.Scene();//场景
            let camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);//相机
            let renderer = new CSS3DRenderer();//渲染器
            let controls = null;// 控制器
            let elements = [];//节点
            let targets = {table: [], sphere: [], helix: [], grid: []};//动画配置

            let articles = document.querySelectorAll('.article');
            let sphere = new THREE.Vector3();//向量1
            let helix = new THREE.Vector3();// 向量2

            camera.position.z = 3000;

            articles.forEach((element, index) => {
                let oCss3d = new CSS3DObject(element);
                oCss3d.position.x = Math.random() * 4000 - 2000;
                oCss3d.position.y = Math.random() * 4000 - 2000;
                oCss3d.position.z = Math.random() * 4000 - 2000;
                scene.add(oCss3d);

                elements.push(oCss3d);

                // table
                {
                    let oObject3D1 = new THREE.Object3D();
                    oObject3D1.position.x = 0;
                    oObject3D1.position.y = -(index * 195) + 500;
                    oObject3D1.position.z = 900;
                    targets.table.push(oObject3D1);
                }

                // sphere
                {
                    let phi = Math.acos(-1 + (2 * index) / articles.length);
                    let theta = Math.sqrt(articles.length * Math.PI) * phi;
                    let oObject3D2 = new THREE.Object3D();
                    oObject3D2.position.setFromSphericalCoords(800, phi, theta);
                    sphere.copy(oObject3D2.position).multiplyScalar(2);
                    oObject3D2.lookAt(sphere);
                    targets.sphere.push(oObject3D2);
                }

                // helix
                // {
                //     let theta = index * 0.175 + Math.PI;
                //     let y = -(index * 8) + 450;
                //     let oObject3D3 = new THREE.Object3D();
                //
                //     oObject3D3.position.setFromCylindricalCoords(900, theta, y);
                //     helix.x = oObject3D3.position.x * 2;
                //     helix.y = oObject3D3.position.y;
                //     helix.z = oObject3D3.position.z * 2;
                //     oObject3D3.lookAt(helix);
                //     targets.helix.push(oObject3D3);
                // }
                //
                // // grid
                // {
                //     let oObject3D4 = new THREE.Object3D();
                //     oObject3D4.position.x = ((index % 5) * 400) - 800;
                //     oObject3D4.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
                //     oObject3D4.position.z = (Math.floor(index / 25)) * 1000 - 2000;
                //     targets.grid.push(oObject3D4);
                // }
            })

            // 添加渲染器
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.querySelector('#container').appendChild(renderer.domElement);

            // 添加控制器
            controls = new TrackballControls(camera, renderer.domElement);
            controls.minDistance = 500;
            controls.maxDistance = 6000;

            // 添加渲染器
            Object.assign(this, {
                camera,
                scene,
                renderer,
                controls,
                elements,
                targets
            })

            controls.addEventListener('change', this.render);
            window.addEventListener('resize', this.onWindowResize, false);
        },

        /**
         * 循环动画
         */
        animate() {
            requestAnimationFrame(this.animate);
            TWEEN.update();
            this.controls.update();
        },

        /**
         * 宽高改变时
         */
        onWindowResize() {
            let {camera, renderer} = this;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
            this.render();
        },

        /**
         * 渲染
         */
        render() {
            let {renderer, scene, camera} = this;
            renderer.render(scene, camera);
        },

        /**
         * 移动动画
         */
        transform(name) {
            let {elements, targets} = this;
            let duration = 2000;
            TWEEN.removeAll();

            for (let i = 0; i < elements.length; i++) {
                var object = elements[i];
                var target = targets[name][i];
                new TWEEN.Tween(object.position)
                        .to({
                            x: target.position.x, y: target.position.y, z: target.position.z
                        }, Math.random() * duration + duration)
                        .easing(TWEEN.Easing.Exponential.InOut)
                        .start();

                new TWEEN.Tween(object.rotation)
                        .to({
                            x: target.rotation.x, y: target.rotation.y, z: target.rotation.z
                        }, Math.random() * duration + duration)
                        .easing(TWEEN.Easing.Exponential.InOut)
                        .start();
            }

            new TWEEN.Tween(this)
                    .to({}, duration * 2)
                    .onUpdate(this.render)
                    .start();
        },
    }
}
</script>

<style lang="scss">
.wmm-index {
    .article {
        width: 992px;
        height: 135px;
        border-radius: 5px;
        background: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        padding: 15px;
        line-height: 1.6;

        &:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
        }

        .title {
            font-size: 20px;
            color: #333333;
            font-weight: bold;
        }

        .description {
            font-size: 14px;
        }

        .createdAt {
            font-size: 12px;
            color: #888888;
            text-align: right;
        }

    }
}
</style>
