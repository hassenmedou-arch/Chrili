/* اشريلي — الترجمة إلى الفرنسية (Chrili — version française)
   اللغة تُحفظ في الهاتف. النصوص العربية في الصفحة تُستبدل تلقائياً بالفرنسية،
   أما بيانات المنتجات والمشاهير (الأسماء والأوصاف) فتبقى كما كتبها أصحابها. */
(function () {
  let LANG = 'ar';
  try { LANG = localStorage.getItem('chrili_lang') || 'ar'; } catch (e) {}
  window.CHRILI_LANG = LANG;
  window.toggleLang = function () {
    try { localStorage.setItem('chrili_lang', LANG === 'fr' ? 'ar' : 'fr'); } catch (e) {}
    location.reload();
  };
  window.tr = (s) => (LANG === 'fr' && FR[norm(s)]) || s;
  const norm = (s) => String(s).replace(/\s+/g, ' ').trim();

  const FR = {
    // ——— عام ———
    'اشريلي': 'Chrili', 'اشريلي Chrili': 'Chrili', 'نعم': 'Oui', 'إلغاء': 'Annuler', 'حذف': 'Supprimer', 'مسح': 'Effacer',
    'جديد': 'Nouveau', 'الكل': 'Tout', 'أخرى': 'Autres', 'آخر': 'Dernier', 'طلب': 'Commande', 'منتج': 'produits', 'منتجات': 'produits',
    'قطع': 'pièces', 'أوقية': 'MRU', 'خروج': 'Déconnexion', 'دخول': 'Connexion', 'زيادة': 'Augmenter', 'إنقاص': 'Diminuer',
    'مشاركة': 'Partager', 'فأكثر': 'ou plus', 'متابع': 'abonnés', 'متابع ·': 'abonnés ·', '→ رجوع': '← Retour', 'صديقنا': 'cher client',
    'لوحة التحكم': 'Tableau de bord', 'واجهتي': 'Ma vitrine', 'خطأ غير معروف': 'Erreur inconnue',
    '⏳ لحظة...': '⏳ Un instant...', '⏳ جارٍ التحميل...': '⏳ Chargement...', 'التنقّل': 'Navigation',
    'تعذّر الاتصال، حاول مرة أخرى': 'Connexion impossible, réessayez', 'خطأ في الخادم، حاول مرة أخرى': 'Erreur du serveur, réessayez',
    'تعذّر تحميل البيانات. تحقق من الاتصال ثم أعد فتح التطبيق.': 'Impossible de charger les données. Vérifiez votre connexion puis rouvrez l’application.',
    // ——— الدخول والتسجيل ———
    'تسوّق مباشرة من واجهات مشاهيرك المفضلين': 'Achetez directement dans les vitrines de vos stars préférées',
    'تسجيل الدخول': 'Connexion', 'حساب جديد': 'Créer un compte', 'رقم الهاتف': 'Numéro de téléphone', 'كلمة المرور': 'Mot de passe',
    'الاسم الكامل': 'Nom complet', 'اسمك': 'Votre nom', '8 أرقام': '8 chiffres', '6 أرقام': '6 chiffres', '6 أحرف على الأقل': '6 caractères minimum',
    'نسيت كلمة المرور؟': 'Mot de passe oublié ?', 'إنشاء الحساب': 'Créer le compte', 'إرسال رمز التحقق': 'Envoyer le code',
    'تأكيد وإنشاء الحساب': 'Confirmer et créer le compte', 'رمز التحقق': 'Code de vérification',
    'رمز التحقق المرسل إلى هاتفك': 'Code reçu sur votre téléphone', 'تغيير الرقم / إعادة الإرسال': 'Changer de numéro / renvoyer',
    'استرجاع كلمة المرور': 'Récupérer le mot de passe', 'كلمة المرور الجديدة': 'Nouveau mot de passe', 'تغيير كلمة المرور': 'Changer le mot de passe',
    '→ رجوع لتسجيل الدخول': '← Retour à la connexion',
    'نرسل لك رمزاً برسالة SMS': 'Nous vous envoyons un code par SMS', 'مرة واحدة فقط': 'une seule fois',
    'لتأكيد رقمك. بعدها تدخل دائماً بكلمة المرور.': 'pour confirmer votre numéro. Ensuite, connexion par mot de passe uniquement.',
    'بعد إنشاء الحساب تؤكّد رقمك': 'Après la création du compte, confirmez votre numéro', 'برسالة واتساب واحدة': 'par un seul message WhatsApp',
    'إلى اشريلي (مجاناً). بعدها تدخل دائماً بكلمة المرور.': 'à Chrili (gratuit). Ensuite, connexion par mot de passe uniquement.',
    'رقم الهاتف أو كلمة المرور غير صحيحة': 'Numéro ou mot de passe incorrect', 'رقم الهاتف يجب أن يكون 8 أرقام': 'Le numéro doit contenir 8 chiffres',
    'رقم الهاتف 8 أرقام ويبدأ بـ 2 أو 3 أو 4': 'Le numéro contient 8 chiffres et commence par 2, 3 ou 4',
    'كلمة المرور يجب أن تكون 6 أحرف على الأقل': 'Le mot de passe doit contenir au moins 6 caractères',
    'أدخل اسمًا صحيحًا': 'Entrez un nom valide', 'أدخل اسماً صحيحاً': 'Entrez un nom valide', 'أدخل الرمز المكوّن من 6 أرقام': 'Entrez le code à 6 chiffres',
    'تم إنشاء الحساب ✅ سجّل الدخول الآن': 'Compte créé ✅ Connectez-vous', 'تم تغيير كلمة المرور ✅ سجّل الدخول': 'Mot de passe changé ✅ Connectez-vous',
    'أرسلنا رمزاً إلى': 'Code envoyé au', '. لم يصلك؟ يمكنك طلب رمز جديد بعد دقيقة.': '. Pas reçu ? Nouveau code possible dans une minute.',
    '🧪 وضع التجربة (بدون SMS): الرمز هو': '🧪 Mode test (sans SMS) : le code est',
    'هل تريد تسجيل الخروج؟': 'Voulez-vous vous déconnecter ?',
    // رسائل الخادم
    'هذا الرقم مسجّل مسبقاً، سجّل الدخول': 'Ce numéro est déjà inscrit, connectez-vous',
    'لا يوجد حساب بهذا الرقم': 'Aucun compte avec ce numéro', 'انتظر دقيقة قبل طلب رمز جديد': 'Attendez une minute avant de redemander un code',
    'تجاوزت عدد الرسائل لهذا اليوم، حاول غداً': 'Trop de messages aujourd’hui, réessayez demain', 'طلبات كثيرة، حاول بعد ساعة': 'Trop de demandes, réessayez dans une heure',
    'الخدمة مزدحمة، حاول لاحقاً': 'Service saturé, réessayez plus tard', 'الرمز 6 أرقام': 'Le code contient 6 chiffres',
    'انتهت صلاحية الرمز، اطلب رمزاً جديداً': 'Code expiré, demandez-en un nouveau', 'محاولات كثيرة، اطلب رمزاً جديداً': 'Trop d’essais, demandez un nouveau code',
    'كلمة المرور 6 أحرف على الأقل': 'Mot de passe : 6 caractères minimum', 'التسجيل الآن عبر واتساب — حدّث الصفحة': 'L’inscription se fait par WhatsApp — rechargez la page',
    'استرجاع كلمة المرور غير متاح الآن — تواصل مع اشريلي عبر واتساب': 'Récupération indisponible — contactez Chrili sur WhatsApp',
    'رقم الهاتف غير صحيح (8 أرقام يبدأ بـ 2 أو 3 أو 4)': 'Numéro invalide (8 chiffres, commence par 2, 3 ou 4)',
    // ——— تأكيد الرقم عبر واتساب ———
    'أكّد رقمك عبر واتساب': 'Confirmez votre numéro via WhatsApp',
    'اضغط الزر، فيفتح واتساب برسالة جاهزة فيها رمزك. اضغط «إرسال» فقط.': 'Appuyez sur le bouton : WhatsApp s’ouvre avec un message contenant votre code. Appuyez simplement sur « Envoyer ».',
    '💬 إرسال الرمز عبر واتساب': '💬 Envoyer le code par WhatsApp',
    'يمكنك التسوّق الآن. سيؤكّد فريق اشريلي رقمك بعد وصول رسالتك.': 'Vous pouvez déjà acheter. L’équipe Chrili confirmera votre numéro à réception de votre message.',
    '📱 أكّد رقمك: أرسل الرمز': '📱 Confirmez votre numéro : envoyez le code', 'عبر واتساب ·': 'par WhatsApp ·', 'إرسال الآن': 'Envoyer',
    // ——— التنقّل والرئيسية ———
    'الرئيسية': 'Accueil', 'المشاهير': 'Stars', 'الأقسام': 'Rayons', 'السلة': 'Panier', 'حسابي': 'Mon compte', '👤 حسابي': '👤 Mon compte',
    'مرحبًا': 'Bonjour', 'اختر مشهورًا وتصفّح بضاعته': 'Choisissez une star et découvrez ses produits',
    'ابحث عن مشهور أو منتج...': 'Rechercher une star ou un produit...', 'كل المشاهير': 'Toutes les stars',
    'لا يوجد مشاهير بعد': 'Aucune star pour le moment', 'لا توجد نتائج لبحثك': 'Aucun résultat', 'لا توجد واجهات بعد': 'Aucune vitrine pour le moment',
    'تسوّق الآن': 'Acheter', 'هذا الأسبوع': 'Cette semaine', '→ كل الأقسام': '← Tous les rayons',
    'لا توجد منتجات في هذا القسم': 'Aucun produit dans ce rayon', 'لا توجد منتجات بعد': 'Aucun produit pour le moment',
    'مأكولات': 'Alimentation', 'إلكترونيات': 'Électronique', 'ملابس تقليدية': 'Vêtements traditionnels', 'تجميل وعطور': 'Beauté & parfums',
    'إكسسوارات': 'Accessoires', 'رياضة': 'Sport',
    // ——— الأقسام (شجرة C01…C20) وأقسام المشاهير ———
    "ملابس نسائية": "Vêtements femme", "ملاحف": "Melhfas", "دراعات وعبايات": "Draâs et abayas", "فساتين": "Robes", "ملابس يومية": "Vêtements du quotidien", "ملابس النوم والداخلية": "Nuit et lingerie", "ملابس رياضية نسائية": "Sport femme", "ملابس رجالية": "Vêtements homme", "دراعة وبوبو": "Draâ et boubou", "قمصان وسراويل": "Chemises et pantalons", "عمائم وشاشات": "Turbans et chèches", "ملابس داخلية رجالية": "Sous-vêtements homme", "ملابس رياضية رجالية": "Sport homme", "ملابس الأطفال والرضّع": "Enfants et bébés", "أولاد": "Garçons", "بنات": "Filles", "رضّع": "Bébés", "أحذية وحقائب": "Chaussures et sacs", "أحذية نسائية": "Chaussures femme", "أحذية رجالية": "Chaussures homme", "أحذية أطفال": "Chaussures enfant", "حقائب يد": "Sacs à main", "حقائب سفر وظهر": "Valises et sacs à dos", "مجوهرات وإكسسوارات": "Bijoux et accessoires", "ذهب": "Or", "فضة": "Argent", "إكسسوارات": "Accessoires", "ساعات": "Montres", "نظارات": "Lunettes", "مكياج": "Maquillage", "مكياج الوجه": "Teint", "مكياج العيون": "Yeux", "مكياج الشفاه": "Lèvres", "الأظافر": "Ongles", "فرش وأدوات المكياج": "Pinceaux et accessoires", "العناية الشخصية": "Soins personnels", "العناية بالبشرة": "Soins de la peau", "العناية بالشعر": "Soins des cheveux", "الجسم والاستحمام": "Corps et bain", "حناء وتجميل تقليدي": "Henné et beauté traditionnelle", "الحلاقة والعناية بالرجل": "Rasage et soins homme", "عطور وبخور": "Parfums et encens", "عطور نسائية": "Parfums femme", "عطور رجالية": "Parfums homme", "بخور وعود": "Encens et oud", "مباخر": "Brûle-encens", "معطّرات المنزل": "Parfums d’intérieur", "أكل ومواد غذائية": "Alimentation", "تمور": "Dattes", "أرز ودقيق وحبوب": "Riz, farine et céréales", "زيوت وسكر": "Huiles et sucre", "لحوم وأسماك": "Viandes et poissons", "ألبان وأجبان": "Laitages et fromages", "حلويات ووجبات خفيفة": "Douceurs et snacks", "توابل وبهارات": "Épices", "معلّبات": "Conserves", "مشروبات": "Boissons", "شاي (أتاي)": "Thé (atay)", "قهوة": "Café", "عصائر ومياه": "Jus et eaux", "إلكترونيات": "Électronique", "هواتف": "Téléphones", "إكسسوارات الهاتف": "Accessoires téléphone", "حواسيب وأجهزة لوحية": "Ordinateurs et tablettes", "سماعات وصوت": "Écouteurs et audio", "ساعات ذكية": "Montres connectées", "تلفزيونات": "Téléviseurs", "أجهزة منزلية": "Électroménager", "أجهزة المطبخ الصغيرة": "Petit électroménager", "أجهزة كبيرة": "Gros électroménager", "أجهزة الشعر والتجميل": "Appareils coiffure et beauté", "تكييف ومراوح": "Climatisation et ventilateurs", "البيت والديكور": "Maison et déco", "أثاث": "Meubles", "مفروشات وسجّاد": "Linge et tapis", "أواني المطبخ": "Ustensiles de cuisine", "أطقم أتاي": "Services à thé", "ديكور وإضاءة": "Déco et luminaires", "الصحة": "Santé", "مكمّلات وفيتامينات": "Compléments et vitamines", "أجهزة طبية": "Appareils médicaux", "الأم والطفل": "Maman et bébé", "الأطفال والألعاب": "Enfants et jouets", "ألعاب": "Jouets", "مستلزمات الرضّع": "Articles bébé", "أدوات مدرسية": "Fournitures scolaires", "الرياضة": "Sport", "معدّات رياضية": "Équipements sportifs", "لياقة بدنية": "Fitness", "رياضات خارجية": "Sports de plein air", "السيارات": "Auto", "إكسسوارات السيارة": "Accessoires auto", "العناية بالسيارة": "Entretien auto", "كتب وقرطاسية": "Livres et papeterie", "كتب ومصاحف": "Livres et Corans", "قرطاسية": "Papeterie", "هدايا ومناسبات": "Cadeaux et événements", "هدايا": "Cadeaux", "مستلزمات الأعراس والمناسبات": "Mariages et fêtes", "أخرى": "Autres", "متنوّع": "Divers", "ملابس": "Vêtements", "أزياء": "Mode", "موضة": "Mode", "عطور": "Parfums", "عناية": "Soins", "عناية بالبشرة": "Soins de la peau", "أجهزة": "Appareils", "أجهزة تجميل": "Appareils de beauté", "تجميل": "Beauté", "أكل": "Cuisine", "طبخ": "Cuisine", "رياضة": "Sport", "فن": "Art", "غناء": "Musique", "موسيقى": "Musique", "كوميديا": "Humour", "سفر": "Voyage", "ديكور": "Déco", "أطفال": "Enfants", "حلويات": "Pâtisserie",
    // ——— واجهة المشهور والمنتج ———
    '⇅ رتّب': '⇅ Trier', '⚲ تحديد البحث': '⚲ Filtrer', 'تحديد البحث': 'Filtrer', 'رتّب حسب': 'Trier par',
    'الأحدث': 'Nouveautés', 'السعر: من الأقل إلى الأعلى': 'Prix croissant', 'السعر: من الأعلى إلى الأقل': 'Prix décroissant', 'الاسم (أ - ي)': 'Nom (A–Z)',
    'الماركة': 'Marque', 'القسم': 'Rayon', '♥ المفضّلة فقط': '♥ Favoris uniquement', '✓ المتوفّر فقط': '✓ En stock uniquement',
    'عرض النتائج': 'Voir les résultats', 'لا توجد نتائج لهذا الاختيار': 'Aucun résultat pour cette sélection', 'المفضّلة': 'Favoris',
    'حصري': 'Exclusif', 'نفدت الكمية': 'Épuisé', 'غير متوفّر': 'Indisponible', 'متوفّر': 'En stock',
    '+ أضف إلى السلة': '+ Ajouter au panier', '+ السلة': '+ Panier', 'اشترِ الآن': 'Acheter maintenant',
    'رقم المنتج:': 'Réf. produit :', '⭐ من واجهة': '⭐ Vitrine de', 'التوصيل': 'Livraison', '· مجاني فوق': '· gratuite dès',
    'تم نسخ رابط الواجهة': 'Lien de la vitrine copié', 'لا توجد كمية إضافية من هذا المنتج': 'Pas de stock supplémentaire pour ce produit',
    'أُضيف «': 'Ajouté : « ', '» — تابع التسوّق أو افتح السلة': ' » — continuez vos achats ou ouvrez le panier',
    'تمت إضافة «': 'Ajouté : « ', '» إلى السلة': ' » au panier', '✓ في السلة (': '✓ Dans le panier (',
    // ——— السلة والطلب ———
    'سلة الشراء': 'Mon panier', '→ متابعة التسوّق': '← Continuer mes achats', 'سلتك فارغة': 'Votre panier est vide',
    'تصفّح المشاهير': 'Découvrir les stars', '＋ أضف منتجات أخرى': '＋ Ajouter d’autres produits', 'المجموع الفرعي': 'Sous-total',
    'مجاني 🎉': 'Gratuite 🎉', 'الإجمالي': 'Total', 'عنوان التوصيل': 'Adresse de livraison', 'الحي، الشارع، علامة قريبة...': 'Quartier, rue, repère...',
    'أدخل عنوان التوصيل': 'Entrez l’adresse de livraison', 'تأكيد الطلب': 'Confirmer la commande', 'إتمام الطلب ←': 'Commander →',
    'في السلة ·': 'au panier ·', 'تعذّر تسجيل الطلب:': 'Commande impossible :', 'منتج غير متوفر أو الكمية غير كافية': 'Produit indisponible ou quantité insuffisante',
    'تم استلام طلبك!': 'Commande reçue !', 'رقم الطلب:': 'N° de commande :', 'المبلغ:': 'Montant :', 'سنتصل بك على الرقم': 'Nous vous appellerons au',
    'لتأكيد التوصيل.': 'pour confirmer la livraison.', 'عرض طلباتي': 'Voir mes commandes', '، ومجاني للطلبات من': ', gratuite dès',
    // ——— طلباتي والحساب ———
    'طلباتي': 'Mes commandes', 'لا توجد طلبات بعد': 'Aucune commande pour le moment', 'تعذّر تحميل الطلبات': 'Impossible de charger les commandes',
    'مؤكَّد': 'Confirmée', 'تم التوصيل': 'Livrée', 'ملغى': 'Annulée', 'الاسم': 'Nom', 'الهاتف': 'Téléphone',
    '🔒 سياسة الخصوصية': '🔒 Politique de confidentialité', 'سياسة الخصوصية': 'Politique de confidentialité', '🗑️ حذف حسابي': '🗑️ Supprimer mon compte',
    '🗑️ حذف الحساب نهائياً': '🗑️ Supprimer définitivement le compte',
    '• يُحذف حسابك واسمك ورقمك وكلمة المرور': '• Votre compte, nom, numéro et mot de passe sont supprimés', 'نهائياً': 'définitivement',
    '، ولا يمكن استرجاعها.': ' et ne peuvent pas être récupérés.', '• طلباتك القديمة تبقى في سجلات المحاسبة': '• Vos anciennes commandes restent dans la comptabilité',
    'بدون اسمك ولا رقمك ولا عنوانك': 'sans votre nom, numéro ni adresse', '• إذا كان لديك طلب لم يُسلَّم بعد، انتظر التوصيل أولاً.': '• Si une commande est en cours, attendez sa livraison.',
    'أدخل كلمة المرور للتأكيد': 'Entrez votre mot de passe pour confirmer', 'حذف حسابي نهائياً': 'Supprimer définitivement mon compte',
    '⏳ جارٍ الحذف...': '⏳ Suppression...', 'أدخل كلمة المرور': 'Entrez le mot de passe', 'تعذّر الحذف': 'Suppression impossible',
    'تعذّر الحذف، حاول مرة أخرى': 'Suppression impossible, réessayez', 'تم حذف حسابك نهائياً': 'Votre compte a été supprimé définitivement',
    'كلمة المرور غير صحيحة': 'Mot de passe incorrect', 'سجّل الدخول أولاً': 'Connectez-vous d’abord',
    'حسابات الإدارة والمشاهير والتجّار تُحذف عن طريق اشريلي — تواصل معنا': 'Les comptes admin, stars et marchands sont supprimés par Chrili — contactez-nous',
  };
  Object.assign(FR, {"واجهات المشاهير": "Vitrines des stars", "ما يختاره مشهورك، يصلك إلى البيت": "Ce que votre star choisit, livré chez vous", "تصفية": "Filtrer", "المفضّلة فقط": "Favoris uniquement", "حذف حسابي": "Supprimer mon compte", "حذف الحساب نهائياً": "Supprimer le compte définitivement", "تم استلام طلبك": "Commande reçue", "مجاني": "Gratuite", "إتمام الطلب": "Commander", "جارٍ التحميل": "Chargement", "ابحث عن مشهور أو منتج": "Rechercher une star ou un produit", "رتّب": "Trier"});
  if (window.CHRILI_FR_EXTRA) Object.assign(FR, window.CHRILI_FR_EXTRA);
  Object.assign(FR, {"طريقة الدفع": "Mode de paiement", "الدفع عند الاستلام": "Paiement à la livraison", "غير مدفوع": "Non payée", "الدفع قيد التحقق": "Paiement en vérification", "مدفوع": "Payée", "لم نجد الدفع": "Paiement introuvable", "حوّل المبلغ إلى رقم اشريلي:": "Envoyez le montant au numéro Chrili :", "ثم اكتب رقم العملية الذي يظهر في تطبيقك بعد التحويل:": "Puis saisissez le numéro de transaction affiché dans votre application :", "رقم العملية": "N° de transaction", "أرسلت المبلغ": "J’ai envoyé le montant", "نتحقق من وصول المبلغ ثم نؤكّد طلبك. إذا لم تدفع الآن، تقدر تدفع لاحقاً من «طلباتي».": "Nous vérifions la réception puis confirmons votre commande. Vous pouvez aussi payer plus tard depuis « Mes commandes ».", "شكراً، استلمنا رقم العملية": "Merci, numéro de transaction reçu", "نتحقق من الدفع ونؤكّد طلبك قريباً.": "Nous vérifions le paiement et confirmons votre commande bientôt.", "ادفع الآن بالتطبيق البنكي": "Payer maintenant avec l’application bancaire", "أدخل رقم العملية": "Saisissez le numéro de transaction", "ادفع": "Payez", "عبر": "via", "رقم العملية غير صحيح": "Numéro de transaction invalide", "طريقة الدفع هذه غير متاحة حالياً": "Ce mode de paiement n’est pas disponible", "رقم العملية مستعمل في طلب آخر": "Ce numéro de transaction est déjà utilisé", "هذا الطلب مدفوع": "Cette commande est déjà payée", "هذا الطلب مغلق": "Cette commande est clôturée", "الدفع بالتطبيقات البنكية": "Paiement par applications bancaires", "اكتب رقم حساب اشريلي في كل تطبيق. اتركه فارغاً لإخفاء هذه الطريقة عن الزبون.": "Indiquez le numéro Chrili pour chaque application. Laissez vide pour masquer ce mode.", "رقم الحساب البنكي: 8 أرقام": "Numéro bancaire : 8 chiffres", "دفعات تنتظر التحقق": "Paiements à vérifier", "الدفع: عند الاستلام": "Paiement : à la livraison", "الدفع:": "Paiement :", "تحقّق من الدفع": "Paiement à vérifier", "الدفع مرفوض": "Paiement refusé", "وصل المبلغ": "Montant reçu", "لم يصل": "Non reçu", "إلغاء تأكيد الدفع": "Annuler la confirmation", "تأكيد الدفع": "Confirmer le paiement", "تم تأكيد الدفع": "Paiement confirmé", "سُجّل أن الدفع لم يصل": "Paiement marqué comme non reçu", "· رقم العملية": "· N° de transaction"});
  Object.assign(FR, {"متابعة":"Suivre","تتابعه":"Abonné","إشعارات الطلبات والجديد":"Notifications (commandes et nouveautés)","تفعيل":"Activer","مفعّلة":"Activées","هذا الهاتف لا يدعم الإشعارات":"Ce téléphone ne prend pas en charge les notifications","الإشعارات ممنوعة في إعدادات الهاتف لهذا التطبيق":"Notifications bloquées dans les réglages du téléphone","لم تُفعَّل الإشعارات":"Notifications non activées","تم التفعيل، وأرسلنا لك إشعار تجربة":"Activées : nous vous avons envoyé une notification test","تم تفعيل الإشعارات":"Notifications activées","تعذّر تفعيل الإشعارات":"Impossible d’activer les notifications","قد يعجبك أيضاً":"Vous aimerez aussi","اكتب الوصف بالذكاء الاصطناعي":"Rédiger la description avec l’IA","جارٍ الكتابة...":"Rédaction...","نظرة عامة":"Vue d’ensemble","الإعدادات":"Paramètres","التوصيل":"Livraison","فتح الحسابات":"Création des comptes","لحظة...":"Un instant..."});
  (function(){ const EM=/[\u{1F000}-\u{1FAFF}\u{2300}-\u{23FF}\u{2600}-\u{2714}\u{2716}-\u{27BF}\u{2B00}-\u{2BFF}]️?\s?/gu;
    Object.keys(FR).forEach(k=>{ const k2=k.replace(EM,'').trim(); if(k2&&k2!==k&&!(k2 in FR)) FR[k2]=String(FR[k]).replace(EM,'').trim(); }); })();
  const PATTERNS = [
    [/^ستصلك رسالة عندما يضيف (.+) منتجاً جديداً$/, 'Vous serez prévenu quand $1 ajoute un nouveau produit'],
    [/^مرحباً (.+?) 👋$/, 'Bonjour $1 👋'],
    [/(?:⏳ )?بانتظار تأكيد الرقم \((\d+)\)/g, 'Numéros à confirmer ($1)'],
    [/(?:📂 )?الأقسام \((\d+) رئيسي · (\d+) فرعي\)/g, 'Rayons ($1 principaux · $2 sous-rayons)'],
    [/(\d[\d\s,.]*) أوقية/g, '$1 MRU'],
    [/(\d+) طلب/g, '$1 commande(s)'],
    [/^مرحبًا (.+?) 👋$/, 'Bonjour $1 👋'],
    [/^(\d[\d\s,.]*) منتج$/, '$1 produits'],
    [/(\d[\d\s,.]*) منتج/g, '$1 produits'],
    [/(\d+) في السلة ·/g, '$1 au panier ·'],
    [/^طلب ([A-Z0-9]{6,})$/, 'Commande $1'],
    [/آخر (\d+) قطع/g, 'Plus que $1'],
    [/لديك (\d+) طلب لم يُسلَّم بعد\. انتظر التوصيل أو ألغِ الطلب، ثم احذف الحساب\./, 'Vous avez $1 commande(s) non livrée(s). Attendez la livraison, puis supprimez le compte.'],
    [/الرمز غير صحيح \(بقي (\d+) محاولات\)/, 'Code incorrect ($1 essais restants)'],
    [/التوصيل (\d[\d\s]*) أوقية/g, 'Livraison $1 MRU'],
    [/(\d[\d\s,.]*) أوقية/g, '$1 MRU'],
    [/^مرحبًا (.+)$/, 'Bonjour $1'],
    [/^مرحباً (.+?) 👋$/, 'Bonjour $1 👋'],
  ];
  const KEYS = Object.keys(FR).filter(k => k.length >= 4).sort((a, b) => b.length - a.length);
  const SKIP = '.nm,.br,.tt,.desc,[data-raw],script,style,textarea,input';

  function trText(t) {
    const n = norm(t); if (!n || !/[؀-ۿ]/.test(n)) return null;
    if (FR[n]) return t.replace(n, FR[n]);
    let out = t;
    for (const [re, rep] of PATTERNS) out = out.replace(re, rep);
    if (!/[؀-ۿ]/.test(out)) return out;
    for (const k of KEYS) if (out.includes(k)) out = out.split(k).join(FR[k]);
    return out !== t ? out : null;
  }
  let busy = false;
  function run(root) {
    if (LANG !== 'fr' || busy || !root) return;
    busy = true;
    try {
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node; const todo = [];
      while ((node = w.nextNode())) {
        const p = node.parentElement; if (!p || p.closest(SKIP)) continue;
        const r = trText(node.nodeValue); if (r !== null) todo.push([node, r]);
      }
      todo.forEach(([n, r]) => { n.nodeValue = r; });
      const els = root.querySelectorAll ? root.querySelectorAll('[placeholder],[title],[aria-label]') : [];
      els.forEach(el => ['placeholder', 'title', 'aria-label'].forEach(a => {
        const v = el.getAttribute(a); if (!v) return; const r = trText(v); if (r !== null) el.setAttribute(a, r);
      }));
      if (document.title) { const r = trText(document.title); if (r) document.title = r; }
    } finally { busy = false; }
  }
  window.i18nRun = () => run(document.body);
  if (LANG === 'fr') {
    document.documentElement.lang = 'fr';
    document.documentElement.dir = 'ltr';
    const start = () => {
      run(document.body);
      new MutationObserver(ms => { if (busy) return; for (const m of ms) run(m.target.nodeType === 3 ? m.target.parentElement : m.target); })
        .observe(document.body, { childList: true, subtree: true, characterData: true });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  }
})();
