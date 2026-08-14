// Banco de dados mapeado perfeitamente com todas as 20 coordenadas espaciais [x,y,z] reais da teoria VSEPR
const moleculasDatabase = [
    { ligantes: 2, livres: 0, arranjo: "Linear", nome: "Linear", angulo: "180°", polaridade: "Apolar (Se ligantes iguais)", coords: [[0,0,1.5], [0,0,-1.5]], livresCoords: [] },
    { ligantes: 3, livres: 0, arranjo: "Trigonal Plana", nome: "Trigonal Plana", angulo: "120°", polaridade: "Apolar (Se ligantes iguais)", coords: [[0,1.5,0], [-1.3,-0.75,0], [1.3,-0.75,0]], livresCoords: [] },
    { ligantes: 2, livres: 1, arranjo: "Trigonal Plana", nome: "Angular", angulo: "< 120°", polaridade: "Polar", coords: [[-1.3,-0.75,0], [1.3,-0.75,0]], livresCoords: [[0,1.5,0]] },
    { ligantes: 4, livres: 0, arranjo: "Tetraédrica", nome: "Tetraédrica", angulo: "109.5°", polaridade: "Apolar (Se ligantes iguais)", coords: [[0,1.5,0], [1.41,-0.5,0], [-0.7,-0.5,1.22], [-0.7,-0.5,-1.22]], livresCoords: [] },
    { ligantes: 3, livres: 1, arranjo: "Tetraédrica", nome: "Piramidal Trigonal", angulo: "~ 107°", polaridade: "Polar", coords: [[1.41,-0.5,0], [-0.7,-0.5,1.22], [-0.7,-0.5,-1.22]], livresCoords: [[0,1.5,0]] },
    { ligantes: 2, livres: 2, arranjo: "Tetraédrica", nome: "Angular", angulo: "104.5°", polaridade: "Polar", coords: [[-0.7,-0.5,1.22], [-0.7,-0.5,-1.22]], livresCoords: [[0,1.5,0], [1.41,-0.5,0]] },
    { ligantes: 5, livres: 0, arranjo: "Bipirâmide Trigonal", nome: "Bipirâmide Trigonal", angulo: "90° e 120°", polaridade: "Apolar (Se ligantes iguais)", coords: [[0,1.5,0], [0,-1.5,0], [1.5,0,0], [-0.75,0,1.3], [-0.75,0,-1.3]], livresCoords: [] },
    { ligantes: 4, livres: 1, arranjo: "Bipirâmide Trigonal", nome: "Gangorra", angulo: "90° e < 120°", polaridade: "Polar", coords: [[0,1.5,0], [0,-1.5,0], [-0.75,0,1.3], [-0.75,0,-1.3]], livresCoords: [[1.5,0,0]] },
    { ligantes: 3, livres: 2, arranjo: "Bipirâmide Trigonal", nome: "Forma de T", angulo: "~ 90°", polaridade: "Polar", coords: [[0,1.5,0], [0,-1.5,0], [-0.75,0,1.3]], livresCoords: [[1.5,0,0], [-0.75,0,-1.3]] },
    { ligantes: 2, livres: 3, arranjo: "Bipirâmide Trigonal", nome: "Linear", angulo: "180°", polaridade: "Apolar (Se ligantes iguais)", coords: [[0,1.5,0], [0,-1.5,0]], livresCoords: [[1.5,0,0], [-0.75,0,1.3], [-0.75,0,-1.3]] },
    { ligantes: 6, livres: 0, arranjo: "Octaédrica", nome: "Octaédrica", angulo: "90°", polaridade: "Apolar (Se ligantes iguais)", coords: [[0,1.5,0], [0,-1.5,0], [1.5,0,0], [-1.5,0,0], [0,0,1.5], [0,0,-1.5]], livresCoords: [] },
    { ligantes: 5, livres: 1, arranjo: "Octaédrica", nome: "Piramidal Quadrada", angulo: "~ 90°", polaridade: "Polar", coords: [[0,1.5,0], [1.5,0,0], [-1.5,0,0], [0,0,1.5], [0,0,-1.5]], livresCoords: [[0,-1.5,0]] },
    { ligantes: 4, livres: 2, arranjo: "Octaédrica", nome: "Quadrada Plana", angulo: "90°", polaridade: "Apolar (Se ligantes iguais)", coords: [[1.5,0,0], [-1.5,0,0], [0,0,1.5], [0,0,-1.5]], livresCoords: [[0,1.5,0], [0,-1.5,0]] },
    { ligantes: 3, livres: 3, arranjo: "Octaédrica", nome: "Forma de T (Teórica)", angulo: "~ 90°", polaridade: "Polar", coords: [[1.5,0,0], [-1.5,0,0], [0,0,1.5]], livresCoords: [[0,1.5,0], [0,-1.5,0], [0,0,-1.5]] },
    { ligantes: 2, livres: 4, arranjo: "Octaédrica", nome: "Linear (Teórica)", angulo: "180°", polaridade: "Apolar (Se ligantes iguais)", coords: [[0,0,1.5], [0,0,-1.5]], livresCoords: [[0,1.5,0], [0,-1.5,0], [1.5,0,0], [-1.5,0,0]] },
    { ligantes: 1, livres: 0, arranjo: "Linear", nome: "Linear (Diatômica)", angulo: "Não aplicável", polaridade: "Polar", coords: [[0,0,1.5]], livresCoords: [] },
    { ligantes: 1, livres: 1, arranjo: "Linear", nome: "Linear (Com 1 par livre)", angulo: "Não aplicável", polaridade: "Polar", coords: [[0,0,1.5]], livresCoords: [[0,0,-1.5]] },
    { ligantes: 1, livres: 2, arranjo: "Linear", nome: "Linear (Com 2 pares livres)", angulo: "Não aplicável", polaridade: "Polar", coords: [[0,0,1.5]], livresCoords: [[0,1.5,0], [0,-1.5,0]] },
    { ligantes: 1, livres: 3, arranjo: "Linear", nome: "Linear (Com 3 pares livres)", angulo: "Não aplicável", polaridade: "Polar", coords: [[0,0,1.5]], livresCoords: [[1.5,0,0], [-0.75,1.3,0], [-0.75,-1.3,0]] },
    { ligantes: 1, livres: 4, arranjo: "Tetraédrica", nome: "Linear (Com 4 pares livres)", angulo: "Não aplicável", polaridade: "Polar", coords: [[0,0,1.5]], livresCoords: [[0,1.5,0], [1.41,-0.5,0], [-0.7,-0.5,1.22], [-0.7,-0.5,-1.22]] }
];

let currentLigantes = 2, currentLivres = 0;
let scene, camera, renderer, moleculeGroup;
let btnSubLigante, btnAddLigante, btnSubLivre, btnAddLivre, valLigantes, valLivres, selectGeometria, infoNome, infoArranjo, infoAngulo, infoPolaridade, container3d, btnScreenshot;

function init() {
    btnSubLigante = document.getElementById('btn-sub-ligante'); btnAddLigante = document.getElementById('btn-add-ligante');
    btnSubLivre = document.getElementById('btn-sub-libre'); btnAddLivre = document.getElementById('btn-add-libre');
    valLigantes = document.getElementById('val-ligantes'); valLivres = document.getElementById('val-livres');
    selectGeometria = document.getElementById('select-geometria'); infoNome = document.getElementById('info-nome');
    infoArranjo = document.getElementById('info-arranjo'); infoAngulo = document.getElementById('info-angulo');
    infoPolaridade = document.getElementById('info-polaridade'); container3d = document.getElementById('canvas3d');
    btnScreenshot = document.getElementById('btn-screenshot');

    if (!selectGeometria || !container3d) {
        setTimeout(init, 100);
        return;
    }

    // Organiza a lista de opções de forma crescente
    moleculasDatabase.sort((a,b) => (a.ligantes + a.livres) - (b.ligantes + b.livres));
    selectGeometria.innerHTML = "";
    moleculasDatabase.forEach((mol, idx) => {
        const option = document.createElement('option');
        option.value = idx;
        option.textContent = `(${mol.ligantes}L + ${mol.livres}E) ${mol.nome} [${mol.arranjo}]`;
        selectGeometria.appendChild(option);
    });
    
    setupThreeJS(); 
    updateSimulator(); 
    setupEventListeners(); 
    animate();
}

function setupThreeJS() {
    if (typeof THREE === 'undefined') return;
    scene = new THREE.Scene(); 
    scene.background = new THREE.Color(0x0b0b0c);
    
    camera = new THREE.PerspectiveCamera(45, container3d.clientWidth / container3d.clientHeight, 0.1, 1000); 
    camera.position.set(0, 0, 8);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); 
    renderer.setSize(container3d.clientWidth, container3d.clientHeight);
    container3d.appendChild(renderer.domElement);
    
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dl1 = new THREE.DirectionalLight(0xffffff, 0.7); dl1.position.set(5, 5, 5); scene.add(dl1);
    const dl2 = new THREE.DirectionalLight(0x4ea8de, 0.3); dl2.position.set(-5, -5, 5); scene.add(dl2);
    
    moleculeGroup = new THREE.Group(); 
    scene.add(moleculeGroup);
}

function updateSimulator() {
    valLigantes.textContent = currentLigantes; 
    valLivres.textContent = currentLivres;
    
    let m = moleculasDatabase.find(x => x.ligantes === currentLigantes && x.livres === currentLivres);
    if (!m) {
        infoNome.textContent = "Arranjo Instável"; 
        infoArranjo.textContent = "Desconhecido"; infoAngulo.textContent = "-"; infoPolaridade.textContent = "-";
        build3DModel(null); return;
    }
    
    const cIdx = Array.from(selectGeometria.options).findIndex(o => {
        const item = moleculasDatabase[o.value]; return item.ligantes === currentLigantes && item.livres === currentLivres;
    });
    if (cIdx !== -1) selectGeometria.selectedIndex = cIdx;
    
    infoNome.textContent = `Geometria: ${m.nome}`; 
    infoArranjo.textContent = m.arranjo; infoAngulo.textContent = m.angulo; infoPolaridade.textContent = m.polaridade;
    
    build3DModel(m);
}

function build3DModel(m) {
    while(moleculeGroup.children.length > 0){ moleculeGroup.remove(moleculeGroup.children); }
    if (!m) return;
    
    // Átomo Central (Roxo CPK)
    moleculeGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), new THREE.MeshStandardMaterial({ color: 0x9b5de5, roughness: 0.1, metalness: 0.1 })));
    let forçaX = 0, forçaY = 0, forçaZ = 0;
    
    // Ligações e Átomos Periféricos (Brancos / Vermelhos se polares)
    m.coords.forEach((pos, idx) => {
        const x = pos[0], y = pos[1], z = pos[2];
        forçaX += x; forçaY += y; forçaZ += z;
        
        // Se a molécula for polar, colore o último átomo de vermelho para representar diferença de eletronegatividade
        const corAtomo = (m.polaridade.includes("Polar") && idx === 0) ? 0xff4d4d : 0xffffff;
        
        const atomo = new THREE.Mesh(new THREE.SphereGeometry(0.35, 32, 32), new THREE.MeshStandardMaterial({ color: corAtomo, roughness: 0.2 }));
        atomo.position.set(x, y, z); moleculeGroup.add(atomo);
        moleculeGroup.add(criarCilindro(new THREE.Vector3(0,0,0), new THREE.Vector3(x,y,z), 0.08, 0xffffff));
    });
    
    // Nuvens Eletrônicas em Formato de Balão (Amarelo Neon Brilhante)
    m.livresCoords.forEach(pos => {
        const x = pos[0], y = pos[1], z = pos[2];
        forçaX -= x * 0.4; forçaY -= y * 0.4; forçaZ -= z * 0.4;
        
        const g = new THREE.SphereGeometry(0.28, 32, 32); g.scale(1, 1.6, 1);
        const balao = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0xffb703, transparent: true, opacity: 0.65, emissive: 0xffb703, emissiveIntensity: 0.2 }));
        balao.position.set(x, y, z); balao.lookAt(new THREE.Vector3(x*2, y*2, z*2)); balao.rotateX(Math.PI/2);
        moleculeGroup.add(balao);
    });
    
    // Vetor de Polaridade Líquido (Seta Vermelha Tridimensional)
    const magnitude = Math.sqrt(forçaX*forçaX + forçaY*forçaY + forçaZ*forçaZ);
    if (magnitude > 0.1 && m.polaridade.includes("Polar")) {
      const direcao = new THREE.Vector3(-forçaX, -forçaY, -forçaZ).normalize();
      moleculeGroup.add(new THREE.ArrowHelper(direcao, new THREE.Vector3(0,0,0), 1.8, 0xff4d4d, 0.4, 0.2));
    }
}
function criarCilindro(pA, pB, r, cor) {const d = new THREE.Vector3().subVectors(pB, pA), len = d.length();
                                        const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 16), new THREE.MeshStandardMaterial({ color: cor, roughness: 0.3 }));
                                        m.position.copy(pA).add(d.multiplyScalar(0.5)); 
                                        m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), d.clone().normalize());
                                        return m;
                                       }
function setupEventListeners() {btnAddLigante.addEventListener('click', () => { if ((currentLigantes + currentLivres) < 6 && currentLigantes < 6) { currentLigantes++; updateSimulator(); } });
                                btnSubLigante.addEventListener('click', () => { if (currentLigantes > 1) { currentLigantes--; updateSimulator(); } });btnAddLivre.addEventListener('click', () => { if ((currentLigantes + currentLivres) < 6 && currentLivres < 4) { currentLivres++; updateSimulator(); } });
                                btnSubLivre.addEventListener('click', () => { if (currentLivres > 0) { currentLivres--; updateSimulator(); } });
                                selectGeometria.addEventListener('change', (e) => {const m = moleculasDatabase[e.target.value]; 
                                                                                   if (m) { currentLigantes = m.ligantes; currentLivres = m.livres; updateSimulator(); }});
                                // Ferramenta de Captura de Tela (Tirar Foto)
                                btnScreenshot.addEventListener('click', () => {renderer.render(scene, camera);
                                                                               const dataURL = renderer.domElement.toDataURL('image/png');
                                                                               const link = document.createElement('a');link.download = molecula_${infoNome.textContent.replace('Geometria: ', '')}.png;link.href = dataURL; link.click();
                                                                              });
                                // Rotação Manual via Mouse ou Toque em Telas 
                                Mobilelet drag = false, prev = { x: 0, y: 0 };
                                const start = (e) => { drag = true; const c = e.touches ? e.touches[0] : e; prev = { x: c.clientX, y: c.cientY }; };const move = (e) => {
                                    if (!drag) return; 
                                                                                                                                                                         const c = e.touches ? e.touches[0] : e;moleculeGroup.rotation.y += (c.clientX - prev.x) * 0.007; 
                                                                                                                                                                         moleculeGroup.rotation.x += (c.clientY - prev.y) * 0.007;prev = { x: c.clientX, y: c.clientY };
                                                                                                                                                                        };
                                container3d.addEventListener('mousedown', start); 
                                container3d.addEventListener('mousemove', move);
                                window.addEventListener('mouseup', () => drag = false);
                                container3d.addEventListener('touchstart', start, { passive: true }); 
                                container3d.addEventListener('touchmove', move, { passive: true });
                                window.addEventListener('touchend', () => drag = false);
                                window.addEventListener('resize', () => {
                                    camera.aspect = container3d.clientWidth / container3d.clientHeight; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 camera.updateProjectionMatrix(); 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 renderer.setSize(container3d.clientWidth, container3d.clientHeight);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                });
                               
function animate() { 
requestAnimationFrame(animate); 
if(moleculeGroup && !drag) moleculeGroup.rotation.y += 0.003;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(renderer) renderer.render(scene, camera);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             }
let drag = false;
window.addEventListener('mousedown', () => drag = true); 
window.addEventListener('mouseup', () => drag = false);
window.addEventListener('touchstart', () => drag = true); 
window.addEventListener('touchend', () => drag = false);
init();
