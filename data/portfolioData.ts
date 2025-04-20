// Import the portfolio JSON data
import portfolioJson from './portfolioData.json';

// Define interfaces for the portfolio data structure
interface Contact {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
    twitter: string;
  }
  
  interface Education {
    degree: string;
    institution: string;
    year: string;
  }
  
  interface Certification {
    title: string;
    organization: string;
    year: string;
  }
  
  interface Award {
    title: string;
    organization: string;
    description: string;
    year: string;
    logo: string;
    link: string;
  }
  
  interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
  }
  
  interface Experience {
    location: string;
    highlights: string[];
    technologies: string[];
    position: string;
    company: string;
    date: string;
  }
  
  interface Skills {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
    tools: string[];
    web3: string[];
  }
  
  interface PortfolioData {
    about: string[];
    education: Education[];
    certifications: Certification[];
    skills: Skills;
    awards: Award[];
    projects: Project[];
    experience: Experience[];
    contact: Contact;
  }
  
  // Utility function to check if an object has required properties
  function hasRequiredProperties<T>(obj: any, props: (keyof T)[]): obj is T {
    if (!obj || typeof obj !== 'object') return false;
    return props.every(prop => prop in obj);
  }
  
  // Type guard for the main object
  function isPortfolioData(data: any): data is PortfolioData {
    return (
      data &&
      typeof data === 'object' &&
      Array.isArray(data.about) &&
      Array.isArray(data.education) &&
      Array.isArray(data.certifications) &&
      data.skills && typeof data.skills === 'object' &&
      Array.isArray(data.awards) &&
      Array.isArray(data.projects) &&
      Array.isArray(data.experience) &&
      data.contact && typeof data.contact === 'object'
    );
  }
  
  // Check if all required sections exist as arrays
  function validateArraySection<T>(
    data: any[], 
    requiredProps: (keyof T)[], 
    sectionName: string
  ): T[] {
    if (!Array.isArray(data)) {
      throw new Error(`Section "${sectionName}" must be an array`);
    }
  
    data.forEach((item, index) => {
      if (!hasRequiredProperties<T>(item, requiredProps)) {
        throw new Error(`Item at index ${index} in "${sectionName}" is missing required properties`);
      }
    });
  
    return data as T[];
  }
  
  // Validate experiences
  function validateExperiences(experiences: any[]): Experience[] {
    return validateArraySection<Experience>(
      experiences,
      ['location', 'highlights', 'technologies', 'position', 'company', 'date'],
      'experience'
    );
  }
  
  // Validate education
  function validateEducation(education: any[]): Education[] {
    return validateArraySection<Education>(
      education,
      ['degree', 'institution', 'year'],
      'education'
    );
  }
  
  // Validate projects
  function validateProjects(projects: any[]): Project[] {
    return validateArraySection<Project>(
      projects,
      ['title', 'description', 'technologies', 'link', 'image'],
      'projects'
    );
  }
  
  // Validate certifications
  function validateCertifications(certifications: any[]): Certification[] {
    return validateArraySection<Certification>(
      certifications,
      ['title', 'organization', 'year'],
      'certifications'
    );
  }
  
  // Validate awards
  function validateAwards(awards: any[]): Award[] {
    return validateArraySection<Award>(
      awards,
      ['title', 'organization', 'description', 'year', 'logo'],
      'awards'
    );
  }
  
  // Validate skills
  function validateSkills(skills: any): Skills {
    const requiredSkillSections: (keyof Skills)[] = [
      'frontend', 'backend', 'database', 'devops', 'tools', 'web3'
    ];
    
    if (!hasRequiredProperties<Skills>(skills, requiredSkillSections)) {
      throw new Error('Skills section is missing required properties');
    }
  
    // Validate each skill array
    requiredSkillSections.forEach(section => {
      if (!Array.isArray(skills[section])) {
        throw new Error(`Skills.${section} must be an array`);
      }
    });
  
    return skills as Skills;
  }
  
  // Validate contact
  function validateContact(contact: any): Contact {
    const requiredProps: (keyof Contact)[] = [
      'email', 'phone', 'linkedin', 'github', 'location'
    ];
    
    if (!hasRequiredProperties<Contact>(contact, requiredProps)) {
      throw new Error('Contact section is missing required properties');
    }
  
    return contact as Contact;
  }
  
  // Main validation function for the entire portfolio data
  function validatePortfolioData(data: any): PortfolioData {
    if (!isPortfolioData(data)) {
      throw new Error('Invalid portfolio data structure');
    }
  
    return {
      about: data.about,
      education: validateEducation(data.education),
      certifications: validateCertifications(data.certifications),
      skills: validateSkills(data.skills),
      awards: validateAwards(data.awards),
      projects: validateProjects(data.projects),
      experience: validateExperiences(data.experience),
      contact: validateContact(data.contact)
    };
  }
  

  
  // Export the validated portfolio data
  export const portfolioData = validatePortfolioData(portfolioJson);
  
  // You can also export types for use in other files
  export type {
    PortfolioData,
    Contact,
    Education,
    Certification,
    Award,
    Project,
    Experience,
    Skills
  };