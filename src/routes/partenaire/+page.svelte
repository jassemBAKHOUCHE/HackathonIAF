<div class="partners-container">
    <h2>Nos Partenaires</h2>
    <div class="partners-list">
    <div class="partner-card">
        <a href="https://www.credit-agricole.com/marques-et-metiers/toutes-nos-marques/credit-agricole-technologies-et-services">
            <h3 class="partner-name">Crédit Agricole Technologies et Services</h3>
            <img src="../Logo_Credit_Agricol.jpg" alt="Partenaire 1" class="partner-photo" />
        </a>   
    </div>
    <div class="partner-card">
        <a href="https://cvec.etudiant.gouv.fr">
            <h3 class="partner-name">CVEC</h3>
            <img src="../Logo_CVEC.png" alt="Partenaire 2" class="partner-photo" />
        </a>
    </div>
    <div class="partner-card">
        <a href=" ">
            <h3 class="partner-name">Ingénieur-e au féminin</h3>
            <img src="../Logo_IAF.png" alt="Partenaire 3" class="partner-photo" />
        </a>
    </div>
    <div class="partner-card">
        <a href="https://www.univ-smb.fr/listic/">
            <h3 class="partner-name">LISTIC</h3>
            <img src="../Logo_LISTIC.jpg" alt="Partenaire 4" class="partner-photo" />
        </a>
    </div>
    <div class="partner-card">
        <a href="https://www.ntn-snr.com">
            <h3 class="partner-name">NTN</h3>
            <img src="../Logo_NTN.png" alt="Partenaire 5" class="partner-photo" />
        </a>
    </div>
    <div class="partner-card">
        <a href="https://www.univ-smb.fr/polytech/">
            <h3 class="partner-name">Polytech</h3>
            <img src="../Logo_Polytech.png" alt="Partenaire 6" class="partner-photo" />
        </a>
    </div>
    <div class="partner-card">
        <a href="https://www.soprasteria.com/fr">
            <h3 class="partner-name">Sopra Steria</h3>
            <img src="../Logo_Sopra_Steria.png" alt="Partenaire 7" class="partner-photo" />
        </a>
    </div>
    <div class="partner-card">
        <a href="https://www.annecy.fr">
            <h3 class="partner-name">Ville d'Annecy</h3>
            <img src="../Logo_Ville_Annecy.png" alt="Partenaire 8" class="partner-photo" />
        </a>
    </div>
    </div>
</div>

<style>
    .partners-container {
      width: 100%;
      max-width: 1200px;
      margin: 20px auto;
      text-align: center;
      padding: 20px;
    }
  
    .partners-container h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 20px;
      color: #333;
    }
  
    .partners-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      justify-items: center;
    }
  
    .partner-card {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      width: 100%;
      max-width: 250px;
      text-align: center;
      padding: 20px;
      transition: transform 0.3s ease;
      animation: fadeIn 0.8s ease-in-out;
    }
  
    .partner-card:hover {
      transform: translateY(-5px);
    }
  
    .partner-photo {
        width: 100%;
        height: auto;
        max-height: 200px;
        object-fit: contain;
        margin-bottom: 10px;
    }
  
    .partner-name {
      margin-top: 10px;
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
    }
 </style>