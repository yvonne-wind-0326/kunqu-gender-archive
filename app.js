const works=[
['《梁山伯与祝英台》','plot','祝英台女扮男装赴杭州求学，与梁山伯同窗三年。','https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80'],
['《牡丹亭》','stage','女小生饰柳梦梅：女性演员与男性小生角色的错位。','https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'],
['《玉簪记》','stage','潘必正是青年书生，女小生以巾生传统塑造其形象。','https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'],
['《墙头马上》','stage','裴少俊为巾生角色，清俊与柔美形成观看张力。','https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80'],
['《西厢记》','stage','张生的书生身份由唱腔、折扇和台步共同建立。','https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80'],
['《红楼梦》','stage','女演员饰贾宝玉，少年男性与女性化审美并置。','https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'],
['《司马相如》','stage','女小生表现青年才子的书卷气与情感细腻。','https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80'],
['《桃花扇》','stage','侯方域作为男性文人角色，常进入女小生的表演谱系。','https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80'],
['《长生殿》','stage','生旦之间的反串与帝妃关系构成性别表演层次。','https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'],
['《占花魁》','stage','青年男性角色的柔美、书卷气与女小生身体相遇。','https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80']
];
const grid=document.querySelector('#workGrid');
function render(filter='all'){grid.innerHTML=works.filter(w=>filter==='all'||w[1]===filter).map(w=>`<article class="work-card"><img loading="lazy" src="${w[3]}" alt="${w[0]}舞台意象图"><label>${w[1]==='plot'?'剧情转换':'舞台反串'}</label><div><h3>${w[0]}</h3><p>${w[2]}</p></div></article>`).join('')}
render();
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter)}));
const modal=document.querySelector('#modal');document.querySelector('[data-open]').addEventListener('click',()=>modal.showModal());document.querySelector('.close').addEventListener('click',()=>modal.close());
const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
