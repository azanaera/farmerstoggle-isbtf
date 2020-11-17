package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/addressbook/AddressBookContactBasicsDV.Company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressBookContactBasicsDV_CompanyExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/addressbook/AddressBookContactBasicsDV.Company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressBookContactBasicsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AddressBookContactBasicsDV.Company.pcf: line 52, column 59
    function def_onEnter_20 (def :  pcf.AddressBookPrimaryAddressInputSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef (id=OrganizationName) at AddressBookContactBasicsDV.Company.pcf: line 31, column 56
    function def_onEnter_3 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.ContactNameDelegate(asCompany())))
    }
    
    // 'def' attribute on InputSetRef at AddressBookContactBasicsDV.Company.pcf: line 99, column 81
    function def_onEnter_37 (def :  pcf.AddressBookCompanyVendorAdditionalInfoInputSet_CompanyVendor) : void {
      def.onEnter(asCompany())
    }
    
    // 'def' attribute on InputSetRef at AddressBookContactBasicsDV.Company.pcf: line 113, column 104
    function def_onEnter_49 (def :  pcf.AddressBookBusinessContactInfoInputSet) : void {
      def.onEnter(contact, externalContactSource,allowEditContact)
    }
    
    // 'def' attribute on InputSetRef (id=OrganizationName) at AddressBookContactBasicsDV.Company.pcf: line 31, column 56
    function def_onEnter_5 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.ContactNameDelegate(asCompany())))
    }
    
    // 'def' attribute on InputSetRef at AddressBookContactBasicsDV.Company.pcf: line 128, column 87
    function def_onEnter_58 (def :  pcf.AddressBookVendorW9InfoInputSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on ListViewInput at AddressBookContactBasicsDV.Company.pcf: line 150, column 27
    function def_onEnter_68 (def :  pcf.ContactEFTLV) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at AddressBookContactBasicsDV.Company.pcf: line 52, column 59
    function def_refreshVariables_21 (def :  pcf.AddressBookPrimaryAddressInputSet) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at AddressBookContactBasicsDV.Company.pcf: line 99, column 81
    function def_refreshVariables_38 (def :  pcf.AddressBookCompanyVendorAdditionalInfoInputSet_CompanyVendor) : void {
      def.refreshVariables(asCompany())
    }
    
    // 'def' attribute on InputSetRef (id=OrganizationName) at AddressBookContactBasicsDV.Company.pcf: line 31, column 56
    function def_refreshVariables_4 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.ContactNameDelegate(asCompany())))
    }
    
    // 'def' attribute on InputSetRef at AddressBookContactBasicsDV.Company.pcf: line 113, column 104
    function def_refreshVariables_50 (def :  pcf.AddressBookBusinessContactInfoInputSet) : void {
      def.refreshVariables(contact, externalContactSource,allowEditContact)
    }
    
    // 'def' attribute on InputSetRef at AddressBookContactBasicsDV.Company.pcf: line 128, column 87
    function def_refreshVariables_59 (def :  pcf.AddressBookVendorW9InfoInputSet) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef (id=OrganizationName) at AddressBookContactBasicsDV.Company.pcf: line 31, column 56
    function def_refreshVariables_6 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.ContactNameDelegate(asCompany())))
    }
    
    // 'def' attribute on ListViewInput at AddressBookContactBasicsDV.Company.pcf: line 150, column 27
    function def_refreshVariables_69 (def :  pcf.ContactEFTLV) : void {
      def.refreshVariables(contact)
    }
    
    // 'value' attribute on PrivacyInput (id=V_EIN_Input) at AddressBookContactBasicsDV.Company.pcf: line 48, column 38
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      asCompany().TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AddressBookContactBasicsDV.Company.pcf: line 106, column 67
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.PreferredCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at AddressBookContactBasicsDV.Company.pcf: line 142, column 36
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      asCompany().Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DoingBusinessAs_Ext_Input) at AddressBookContactBasicsDV.Company.pcf: line 38, column 67
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as CompanyVendor).DoingBusinessAs_Ext = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=V_EIN_Input) at AddressBookContactBasicsDV.Company.pcf: line 48, column 38
    function encryptionExpression_17 (VALUE :  java.lang.String) : java.lang.String {
      return asCompany().maskTaxId(VALUE)
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactBasicsDV.Company.pcf: line 20, column 38
    function initialValue_0 () : ContactCategoryScore[] {
      return contact.getSortedCategoryScores()
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactBasicsDV.Company.pcf: line 24, column 23
    function initialValue_1 () : Boolean {
      return sortedCategoryScores != null and sortedCategoryScores.length > 0
    }
    
    // 'label' attribute on Label at AddressBookContactBasicsDV.Company.pcf: line 27, column 55
    function label_2 () : java.lang.String {
      return asCompany().getSubtype().DisplayName
    }
    
    // 'mode' attribute on InputSetRef at AddressBookContactBasicsDV.Company.pcf: line 99, column 81
    function mode_39 () : java.lang.Object {
      return contact typeis CompanyVendor ? "CompanyVendor" : null
    }
    
    // 'mode' attribute on InputSetRef (id=OrganizationName) at AddressBookContactBasicsDV.Company.pcf: line 31, column 56
    function mode_7 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'required' attribute on PrivacyInput (id=V_EIN_Input) at AddressBookContactBasicsDV.Company.pcf: line 48, column 38
    function required_13 () : java.lang.Boolean {
      return asCompany() typeis CompanyVendor
    }
    
    // 'value' attribute on TextInput (id=DoingBusinessAs_Ext_Input) at AddressBookContactBasicsDV.Company.pcf: line 38, column 67
    function valueRoot_10 () : java.lang.Object {
      return (contact as CompanyVendor)
    }
    
    // 'value' attribute on PrivacyInput (id=V_EIN_Input) at AddressBookContactBasicsDV.Company.pcf: line 48, column 38
    function valueRoot_16 () : java.lang.Object {
      return asCompany()
    }
    
    // 'value' attribute on TextInput (id=score_Input) at AddressBookContactBasicsDV.Company.pcf: line 63, column 42
    function valueRoot_26 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on PrivacyInput (id=V_EIN_Input) at AddressBookContactBasicsDV.Company.pcf: line 48, column 38
    function value_14 () : java.lang.String {
      return asCompany().TaxID
    }
    
    // 'value' attribute on TextInput (id=score_Input) at AddressBookContactBasicsDV.Company.pcf: line 63, column 42
    function value_25 () : java.lang.Integer {
      return contact.Score
    }
    
    // 'value' attribute on RowIterator at AddressBookContactBasicsDV.Company.pcf: line 75, column 55
    function value_35 () : entity.ContactCategoryScore[] {
      return sortedCategoryScores
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AddressBookContactBasicsDV.Company.pcf: line 106, column 67
    function value_41 () : typekey.Currency {
      return contact.PreferredCurrency
    }
    
    // 'value' attribute on TypeKeyInput (id=IsVendorAvailable_Ext_Input) at AddressBookContactBasicsDV.Company.pcf: line 111, column 57
    function value_46 () : typekey.VendorAvailabilityType_Ext {
      return contact.VendorAvailability_Ext
    }
    
    // 'value' attribute on BooleanRadioInput (id=Backupwithholding_Ext_Input) at AddressBookContactBasicsDV.Company.pcf: line 134, column 52
    function value_61 () : java.lang.Boolean {
      return asCompany().Backupwithholding_Ext
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at AddressBookContactBasicsDV.Company.pcf: line 142, column 36
    function value_64 () : java.lang.String {
      return asCompany().Notes
    }
    
    // 'value' attribute on TextInput (id=DoingBusinessAs_Ext_Input) at AddressBookContactBasicsDV.Company.pcf: line 38, column 67
    function value_8 () : java.lang.String {
      return (contact as CompanyVendor).DoingBusinessAs_Ext
    }
    
    // 'visible' attribute on InputSet at AddressBookContactBasicsDV.Company.pcf: line 33, column 50
    function visible_12 () : java.lang.Boolean {
      return (contact typeis CompanyVendor)
    }
    
    // 'visible' attribute on InputSet at AddressBookContactBasicsDV.Company.pcf: line 41, column 51
    function visible_19 () : java.lang.Boolean {
      return !(contact typeis CompanyVendor)
    }
    
    // 'visible' attribute on InputDivider at AddressBookContactBasicsDV.Company.pcf: line 54, column 65
    function visible_22 () : java.lang.Boolean {
      return hasCategoryScores or (contact.Score != null)
    }
    
    // 'visible' attribute on TextInput (id=score_Input) at AddressBookContactBasicsDV.Company.pcf: line 63, column 42
    function visible_24 () : java.lang.Boolean {
      return contact.Score != null
    }
    
    // 'visible' attribute on ListViewInput at AddressBookContactBasicsDV.Company.pcf: line 66, column 37
    function visible_36 () : java.lang.Boolean {
      return hasCategoryScores
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at AddressBookContactBasicsDV.Company.pcf: line 106, column 67
    function visible_40 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on InputSetRef at AddressBookContactBasicsDV.Company.pcf: line 128, column 87
    function visible_57 () : java.lang.Boolean {
      return gw.api.admin.BaseAdminUtil.getDefaultCountry() == Country.TC_US 
    }
    
    // 'visible' attribute on InputSet at AddressBookContactBasicsDV.Company.pcf: line 115, column 48
    function visible_60 () : java.lang.Boolean {
      return contact typeis CompanyVendor
    }
    
    property get allowEditContact () : boolean {
      return getRequireValue("allowEditContact", 0) as java.lang.Boolean
    }
    
    property set allowEditContact ($arg :  boolean) {
      setRequireValue("allowEditContact", 0, $arg)
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get externalContactSource () : gw.api.contact.ExternalContactSource {
      return getRequireValue("externalContactSource", 0) as gw.api.contact.ExternalContactSource
    }
    
    property set externalContactSource ($arg :  gw.api.contact.ExternalContactSource) {
      setRequireValue("externalContactSource", 0, $arg)
    }
    
    property get hasCategoryScores () : Boolean {
      return getVariableValue("hasCategoryScores", 0) as Boolean
    }
    
    property set hasCategoryScores ($arg :  Boolean) {
      setVariableValue("hasCategoryScores", 0, $arg)
    }
    
    property get sortedCategoryScores () : ContactCategoryScore[] {
      return getVariableValue("sortedCategoryScores", 0) as ContactCategoryScore[]
    }
    
    property set sortedCategoryScores ($arg :  ContactCategoryScore[]) {
      setVariableValue("sortedCategoryScores", 0, $arg)
    }
    
    function asCompany() : Company {
          return contact as Company;
          }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/addressbook/AddressBookContactBasicsDV.Company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AddressBookContactBasicsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at AddressBookContactBasicsDV.Company.pcf: line 82, column 53
    function valueRoot_30 () : java.lang.Object {
      return categoryScore
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at AddressBookContactBasicsDV.Company.pcf: line 82, column 53
    function value_29 () : typekey.ReviewCategory {
      return categoryScore.ReviewCategory
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at AddressBookContactBasicsDV.Company.pcf: line 88, column 48
    function value_32 () : java.lang.Integer {
      return categoryScore.Score
    }
    
    property get categoryScore () : entity.ContactCategoryScore {
      return getIteratedValue(1) as entity.ContactCategoryScore
    }
    
    
  }
  
  
}