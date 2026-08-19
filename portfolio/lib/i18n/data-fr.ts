// French translations for portfolio data

export const dataFr = {
  personalInfo: {
    bio: "Ingénieur logiciel avec une expérience pratique dans la conception, les tests et le déploiement d'API RESTful et d'applications full-stack utilisant React, Angular, ASP.NET Core et Spring Boot. Expérience en DevOps et automatisation d'infrastructure, incluant les pipelines CI/CD, Docker et la surveillance de plus de 50 serveurs ; apporte une perspective systémique au développement d'applications.",
  },

  projects: {
    "club-races": {
      title: "Club Races — Projet de synthèse universitaire",
      description: "Une plateforme de gestion de courses cyclistes full-stack construite en équipe avec intégration de l'API Strava pour le suivi des performances des athlètes.",
      longDescription: `Responsable du développement backend et de l'intégration tierce pour une plateforme de gestion de courses cyclistes full-stack construite en équipe.

Conception et implémentation de l'intégration de l'API Strava de bout en bout : création d'endpoints pour récupérer, nettoyer et analyser les données de performance et GPS des athlètes, puis modélisation et persistance des résultats comme entités dans MySQL.

Création de fonctionnalités d'analyse et de visualisation pour le suivi d'événements et la surveillance des performances utilisant Spring Boot et MySQL.`,
      highlights: [
        "Responsable du développement backend et de l'intégration tierce",
        "Conception et implémentation de l'intégration de l'API Strava de bout en bout",
        "Création de fonctionnalités d'analyse et de visualisation pour le suivi d'événements",
        "Modélisation et persistance des données de performance des athlètes dans MySQL",
      ],
    },
    "pdf-ai": {
      title: "PDF AI – Application de bureau RAG",
      description: "Une application de bureau RAG axée sur la confidentialité pour discuter avec des PDF localement, utilisant Tauri, React, TypeScript et Python avec une clé API OpenAI fournie par l'utilisateur.",
      longDescription: `Création d'une application de bureau RAG axée sur la confidentialité pour discuter avec des PDF localement, utilisant Tauri, React, TypeScript et Python avec une clé API OpenAI fournie par l'utilisateur ; aucune donnée ne quitte l'appareil.

Implémentation du pipeline de récupération complet : ingestion de PDF, génération d'embeddings et recherche sémantique utilisant une base de données vectorielle LanceDB locale, retournant des réponses contextuelles avec citations des sources et références au niveau des pages.

Support de navigation multi-documents, permettant aux utilisateurs d'interroger et de basculer entre plusieurs PDF indexés dans une seule session.`,
      highlights: [
        "Priorité à la confidentialité avec traitement local uniquement, aucune donnée ne quitte l'appareil",
        "Pipeline de récupération complet avec ingestion de PDF et recherche sémantique",
        "Réponses contextuelles avec citations des sources au niveau des pages",
        "Navigation multi-documents dans une seule session",
      ],
    },
    "sdv": {
      title: "SDV – Outil de visualisation de données",
      description: "Un outil de visualisation de données côté client qui ingère des exports de données d'entraînement téléchargés par l'utilisateur et génère des analyses interactives.",
      longDescription: `Création d'un outil de visualisation de données côté client qui ingère des exports de données d'entraînement téléchargés par l'utilisateur et génère des analyses interactives.

Conception d'une architecture en couches séparant l'ingestion de données, la modélisation de domaine, les analyses et l'interface utilisateur pour supporter l'extensibilité.

Implémentation de graphiques interactifs suivant le volume, la progression de force et les métriques de cohérence.

Déploiement comme application statique sur Vercel, priorisant la performance, la sécurité et la propriété des données (aucun stockage côté serveur).`,
      highlights: [
        "Visualisation de données côté client pour les données d'entraînement téléchargées par l'utilisateur",
        "Architecture en couches pour l'extensibilité",
        "Graphiques interactifs pour le suivi du volume, de la force et de la cohérence",
        "Déploiement statique sans stockage côté serveur",
      ],
    },
    "chara": {
      title: "Chara – Application de suivi des tâches et habitudes",
      description: "Une application full-stack de suivi des tâches et habitudes avec authentification multi-utilisateurs et contrôle d'accès basé sur JWT et rôles.",
      longDescription: `Développement d'une application full-stack de suivi des tâches et habitudes avec authentification multi-utilisateurs et contrôle d'accès basé sur JWT et rôles.

Création d'API RESTful documentées avec Swagger/OpenAPI et couvertes par des tests xUnit.

L'application fournit une interface épurée pour gérer les tâches et développer des habitudes cohérentes.`,
      highlights: [
        "Authentification multi-utilisateurs avec contrôle d'accès basé sur JWT",
        "API RESTful documentées avec Swagger/OpenAPI",
        "Couverture complète de tests xUnit",
        "Interface épurée pour la gestion des tâches et habitudes",
      ],
    },
  },

  experience: {
    "ab-protection": {
      description: "Tests et débogage d'API RESTful au sein d'une équipe full-stack de 5-6 personnes, identifiant plus de 12 bugs et écrivant plus de 15 cas de test pour améliorer la fiabilité et l'intégrité des données.",
      achievements: [
        "Tests et débogage d'API RESTful au sein d'une équipe full-stack de 5-6 personnes, identifiant plus de 12 bugs et écrivant plus de 15 cas de test pour améliorer la fiabilité et l'intégrité des données",
        "Création et correction de fonctionnalités utilisateur, incluant la recherche de données, le tri et la fonctionnalité de téléchargement de fichiers, utilisant React, Angular, RxJS et PostgreSQL",
        "Automatisation des étapes de déploiement manuel en implémentant des pipelines CI/CD avec GitHub Actions pour les déploiements sur Vercel",
      ],
    },
    "ribbon": {
      description: "Création d'outils Bash et API Bitbucket pour identifier les utilisateurs inactifs, les courriels obsolètes et les comptes en double dans l'organisation suite à une fusion d'entreprises.",
      achievements: [
        "Création d'outils Bash et API Bitbucket pour identifier les utilisateurs inactifs, les courriels obsolètes et les comptes en double dans l'organisation suite à une fusion d'entreprises, remplaçant les processus manuels de nettoyage DevOps",
        "Développement d'un outil Bash et API WhiteSource pour auditer les données d'espaces blancs/licences à grande échelle, convertissant les résultats en feuilles de calcul consultables pour révision d'équipe",
        "Conception d'un générateur de documentation automatisé convertissant les wikis Confluence (centaines de pages chacun) en dossiers autonomes, permettant à l'équipe de documentation technique de livrer des docs aux clients sans accès wiki",
        "Surveillance et maintien de la disponibilité de plus de 50 serveurs sur plusieurs distributions Linux utilisant Grafana et InfluxDB, diagnostiquant et résolvant les échecs de stockage, version et connectivité ; création d'un tableau de bord supplémentaire utilisant ElasticSearch et Kibana",
        "Implémentation de pipelines Jenkins, conteneurs Docker et tâches Cron pour exécuter des tests automatisés quotidiens sur jusqu'à 10 services/environnements",
        "Migration de 12 VM et images serveur entre instances OpenStack/OpenShift dans le cadre d'une équipe de 2 personnes lors d'une migration d'infrastructure sensible au temps ; maintenance d'Artifactory pour l'équipe",
      ],
    },
    "sunny-futures": {
      description: "Conseil sur la structure du site web et la configuration de la plateforme utilisant Wix, traduisant les besoins des parties prenantes en recommandations techniques actionnables pour améliorer la présence numérique.",
      achievements: [
        "Conseil sur la structure du site web et la configuration de la plateforme utilisant Wix, traduisant les besoins des parties prenantes en recommandations techniques actionnables pour améliorer la présence numérique",
      ],
    },
  },

  skills: {
    categories: {
      "Programming Languages": "Langages de programmation",
      "Backend & APIs": "Backend et API",
      "Frameworks & Libraries": "Frameworks et bibliothèques",
      "Databases": "Bases de données",
      "Cloud & Infrastructure": "Cloud et infrastructure",
      "DevOps & Automation": "DevOps et automatisation",
      "Tools & Methodologies": "Outils et méthodologies",
    },
  },

  education: {
    "uottawa": {
      degree: "Baccalauréat en sciences appliquées, Génie logiciel (Programme Co-op)",
    },
  },

  languages: [
    {
      language: "Anglais",
      proficiency: "Courant (IELTS 8.0)",
    },
    {
      language: "Français",
      proficiency: "Langue maternelle/Bilingue",
    },
    {
      language: "Arabe",
      proficiency: "Langue maternelle/Bilingue",
    },
    {
      language: "Japonais",
      proficiency: "Avancé (JLPT N2)",
    },
    {
      language: "Espagnol",
      proficiency: "Élémentaire (A2)",
    },
  ],
};
