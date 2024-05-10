Link video: https://youtu.be/EqVhOeIWP14

Link publicare: https://cloud-computing-project-wine.vercel.app/

1.	Introducere
   
Proiectul este alcatuit dintr-o aplicatie web care permite gestionarea todo-urilor, oferind functionalitati precum crearea, vizualizarea, modificarea si stergerea acestora. Aplicatia este dezvoltata folosind tehnoogia NextJS, iar stocarea datelor in backend a fost realizata utilizand servicul cloud oferit de MongoDB. Aplicatia a fost hostata utilizand serviciul de deployment oferit de Vercel.

2. 	Descriere problema
   
Solutia dezvoltata vine in ajutorul persoanelor care vor sa beneficieze de o buna organizare a diferitelor notite. Aplicatia ofera o inerfata usor de folosit, cu un design placut si permite gestionarea cu usurinta a notitelor.

3.	Descriere API

Aplicatia permite utilizatorului accesul la functionalitatile sale prin 3 rute:
-	Ruta de home page, care este alcatuita dintr-un meniu de navigare si un landing page cu informatii despre aplicatie.
-	Ruta de creare a unui todo (/create-todo) ofera utilizatorului posibilitatea de a crea o nota de todo prin intermedul unui formular.
-	Ruta de listare a todo-urilor (/todos) afiseaza utilizatorului o lista cu toate todo-urile sale, separate pe mai multe pagini, fiecare pagina fiind alcatuita din 3 todo-uri.
  
4.	Flux de date

•	Exemplu de request/response
 ![image](https://github.com/georgeg2u/CloudComputingProject/assets/79796049/4a788014-4a39-4262-9a8a-41e4ed83ef1b)

•	Metode HTTP
Metodele folosite in dezvoltarea aplicatiilor sunt cele ce definesc operatiilor CRUD (Create, Read, Update, Delete):

GET – pentru afisarea tuturor todo-urilor din backend 

POST – pentru crearea unui nou todo

PUT – pentru modificarea unui todo existent

DELETE – pentru stergerea unui todo

5.	Capturi ecran aplicatie
-Home Page:
![image](https://github.com/georgeg2u/CloudComputingProject/assets/79796049/baef7e6c-69ab-4104-a711-b0d551b9e490)

-Pagina de creare todo:
 ![image](https://github.com/georgeg2u/CloudComputingProject/assets/79796049/4a81a207-6efc-4654-aa9e-8d12084bcd0f)

-Pagina de afisare a todo-urilor:
 ![image](https://github.com/georgeg2u/CloudComputingProject/assets/79796049/a5a4b7b5-0ae4-41cf-a70d-b57acf15783c)


