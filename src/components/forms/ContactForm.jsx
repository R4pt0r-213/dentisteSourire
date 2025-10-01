import { useState } from 'react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    return newErrors;
  };

  // Gestion des changements
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Supprimer l'erreur si le champ devient valide
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Simulation d'envoi (remplacer par Formspree ou autre service)
  const simulateSubmit = async (data) => {
    // Simulation d'un délai réseau
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulation aléatoire de succès/échec pour la démo
    if (Math.random() > 0.2) { // 80% de succès
      return { success: true };
    } else {
      throw new Error('Erreur de simulation');
    }
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // POINT D'EXTENSION: Remplacer par Formspree ou autre service
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) throw new Error('Erreur réseau');
      
      // Pour la démo, on utilise la simulation
      await simulateSubmit(formData);
      
      setSubmitStatus('success');
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Nous contacter
      </h3>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-700">
              Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex">
            <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p className="text-red-700">
              Une erreur s&apos;est produite lors de l&apos;envoi. Veuillez réessayer ou nous appeler directement.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            name="nom"
            label="Nom complet"
            placeholder="Votre nom et prénom"
            value={formData.nom}
            onChange={handleChange}
            error={errors.nom}
            required
          />
          
          <Input
            name="email"
            type="email"
            label="Adresse email"
            placeholder="votre@email.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>

        <Input
          name="telephone"
          type="tel"
          label="Téléphone"
          placeholder="06 12 34 56 78"
          value={formData.telephone}
          onChange={handleChange}
          error={errors.telephone}
          helper="Optionnel - pour vous rappeler plus facilement"
        />

        <Textarea
          name="message"
          label="Message"
          placeholder="Décrivez votre demande, vos symptômes ou questions..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
            className="flex-1 sm:flex-none"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </Button>
          
          <p className="text-sm text-gray-600 flex items-center">
            🔒 Vos données sont protégées et ne seront pas partagées
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;