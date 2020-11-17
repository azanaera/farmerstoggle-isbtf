package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/contacts/ContactBasicsDV.Company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactBasicsDV_CompanyExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/contacts/ContactBasicsDV.Company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactBasicsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on DateInput (id=CompanyVendorValidFrom_Input) at ContactBasicsDV.Company.pcf: line 75, column 50
    function available_23 () : java.lang.Boolean {
      return ClaimContact != null
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 33, column 96
    function def_onEnter_0 (def :  pcf.ContactBasicsHeaderInputSet) : void {
      def.onEnter(contactHandle, ClaimContact, showRoles, linkStatus)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 60, column 54
    function def_onEnter_18 (def :  pcf.PrimaryAddressInputSet) : void {
      def.onEnter(contactHandle)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 69, column 83
    function def_onEnter_20 (def :  pcf.CompanyVendorAdditionalInfoInputSet_CompanyVendor) : void {
      def.onEnter(contactHandle)
    }
    
    // 'def' attribute on InputSetRef (id=OrganizationName) at ContactBasicsDV.Company.pcf: line 41, column 56
    function def_onEnter_3 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.CCContactHandleContactNameDelegate(contactHandle)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 91, column 80
    function def_onEnter_42 (def :  pcf.BusinessContactInfoInputSet) : void {
      def.onEnter(contactHandle, ClaimContact, claim)
    }
    
    // 'def' attribute on InputSetRef (id=OrganizationName) at ContactBasicsDV.Company.pcf: line 41, column 56
    function def_onEnter_5 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.CCContactHandleContactNameDelegate(contactHandle)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 104, column 120
    function def_onEnter_50 (def :  pcf.VendorW9InfoInputSet) : void {
      def.onEnter(contactHandle)
    }
    
    // 'def' attribute on ListViewInput at ContactBasicsDV.Company.pcf: line 125, column 27
    function def_onEnter_59 (def :  pcf.ContactEFTLV) : void {
      def.onEnter(contactHandle.Contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 33, column 96
    function def_refreshVariables_1 (def :  pcf.ContactBasicsHeaderInputSet) : void {
      def.refreshVariables(contactHandle, ClaimContact, showRoles, linkStatus)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 60, column 54
    function def_refreshVariables_19 (def :  pcf.PrimaryAddressInputSet) : void {
      def.refreshVariables(contactHandle)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 69, column 83
    function def_refreshVariables_21 (def :  pcf.CompanyVendorAdditionalInfoInputSet_CompanyVendor) : void {
      def.refreshVariables(contactHandle)
    }
    
    // 'def' attribute on InputSetRef (id=OrganizationName) at ContactBasicsDV.Company.pcf: line 41, column 56
    function def_refreshVariables_4 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.CCContactHandleContactNameDelegate(contactHandle)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 91, column 80
    function def_refreshVariables_43 (def :  pcf.BusinessContactInfoInputSet) : void {
      def.refreshVariables(contactHandle, ClaimContact, claim)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 104, column 120
    function def_refreshVariables_51 (def :  pcf.VendorW9InfoInputSet) : void {
      def.refreshVariables(contactHandle)
    }
    
    // 'def' attribute on InputSetRef (id=OrganizationName) at ContactBasicsDV.Company.pcf: line 41, column 56
    function def_refreshVariables_6 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.CCContactHandleContactNameDelegate(contactHandle)))
    }
    
    // 'def' attribute on ListViewInput at ContactBasicsDV.Company.pcf: line 125, column 27
    function def_refreshVariables_60 (def :  pcf.ContactEFTLV) : void {
      def.refreshVariables(contactHandle.Contact)
    }
    
    // 'value' attribute on DateInput (id=CompanyVendorValidFrom_Input) at ContactBasicsDV.Company.pcf: line 75, column 50
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContact.ContactValidFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=CompanyVendorValidTo_Input) at ContactBasicsDV.Company.pcf: line 81, column 48
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContact.ContactValidTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.Company.pcf: line 89, column 67
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      Company.PreferredCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on PrivacyInput (id=V_EIN_Input) at ContactBasicsDV.Company.pcf: line 101, column 34
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      Company.TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ContactBasicsDV.Company.pcf: line 117, column 32
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      Company.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DoingBusinessAs_Ext_Input) at ContactBasicsDV.Company.pcf: line 48, column 81
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contactHandle.Contact as CompanyVendor).DoingBusinessAs_Ext = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=V_EIN_Input) at ContactBasicsDV.Company.pcf: line 101, column 34
    function encryptionExpression_47 (VALUE :  java.lang.String) : java.lang.String {
      return Company.maskTaxId(VALUE)
    }
    
    // 'label' attribute on Label at ContactBasicsDV.Company.pcf: line 37, column 46
    function label_2 () : java.lang.String {
      return Company.Subtype.DisplayName
    }
    
    // 'mode' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 69, column 83
    function mode_22 () : java.lang.Object {
      return Company typeis CompanyVendor ? "CompanyVendor" : null
    }
    
    // 'mode' attribute on InputSetRef (id=OrganizationName) at ContactBasicsDV.Company.pcf: line 41, column 56
    function mode_7 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TextInput (id=DoingBusinessAs_Ext_Input) at ContactBasicsDV.Company.pcf: line 48, column 81
    function valueRoot_10 () : java.lang.Object {
      return (contactHandle.Contact as CompanyVendor)
    }
    
    // 'value' attribute on TypeKeyInput (id=BLOCode_Ext_Input) at ContactBasicsDV.Company.pcf: line 55, column 79
    function valueRoot_15 () : java.lang.Object {
      return contactHandle.Contact
    }
    
    // 'value' attribute on DateInput (id=CompanyVendorValidFrom_Input) at ContactBasicsDV.Company.pcf: line 75, column 50
    function valueRoot_26 () : java.lang.Object {
      return ClaimContact
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.Company.pcf: line 89, column 67
    function valueRoot_39 () : java.lang.Object {
      return Company
    }
    
    // 'value' attribute on TypeKeyInput (id=BLOCode_Ext_Input) at ContactBasicsDV.Company.pcf: line 55, column 79
    function value_14 () : typekey.BLOCode_Ext {
      return contactHandle.Contact.BLOCode_Ext
    }
    
    // 'value' attribute on DateInput (id=CompanyVendorValidFrom_Input) at ContactBasicsDV.Company.pcf: line 75, column 50
    function value_24 () : java.util.Date {
      return ClaimContact.ContactValidFrom
    }
    
    // 'value' attribute on DateInput (id=CompanyVendorValidTo_Input) at ContactBasicsDV.Company.pcf: line 81, column 48
    function value_30 () : java.util.Date {
      return ClaimContact.ContactValidTo
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.Company.pcf: line 89, column 67
    function value_37 () : typekey.Currency {
      return Company.PreferredCurrency
    }
    
    // 'value' attribute on PrivacyInput (id=V_EIN_Input) at ContactBasicsDV.Company.pcf: line 101, column 34
    function value_44 () : java.lang.String {
      return Company.TaxID
    }
    
    // 'value' attribute on BooleanRadioInput (id=Backupwithholding_Ext_Input) at ContactBasicsDV.Company.pcf: line 109, column 48
    function value_52 () : java.lang.Boolean {
      return Company.Backupwithholding_Ext
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ContactBasicsDV.Company.pcf: line 117, column 32
    function value_55 () : java.lang.String {
      return Company.Notes
    }
    
    // 'value' attribute on TextInput (id=DoingBusinessAs_Ext_Input) at ContactBasicsDV.Company.pcf: line 48, column 81
    function value_8 () : java.lang.String {
      return (contactHandle.Contact as CompanyVendor).DoingBusinessAs_Ext
    }
    
    // 'visible' attribute on InputSet at ContactBasicsDV.Company.pcf: line 43, column 64
    function visible_12 () : java.lang.Boolean {
      return (contactHandle.Contact typeis CompanyVendor)
    }
    
    // 'visible' attribute on TypeKeyInput (id=BLOCode_Ext_Input) at ContactBasicsDV.Company.pcf: line 55, column 79
    function visible_13 () : java.lang.Boolean {
      return contactHandle.Contact.Subtype == typekey.Contact.TC_LAWFIRM
    }
    
    // 'visible' attribute on InputSet at ContactBasicsDV.Company.pcf: line 66, column 48
    function visible_35 () : java.lang.Boolean {
      return Company typeis CompanyVendor
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.Company.pcf: line 89, column 67
    function visible_36 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on InputSetRef at ContactBasicsDV.Company.pcf: line 104, column 120
    function visible_49 () : java.lang.Boolean {
      return Company typeis CompanyVendor and gw.api.admin.BaseAdminUtil.getDefaultCountry() == Country.TC_US 
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get contactHandle () : gw.api.contact.ContactHandle {
      return getRequireValue("contactHandle", 0) as gw.api.contact.ContactHandle
    }
    
    property set contactHandle ($arg :  gw.api.contact.ContactHandle) {
      setRequireValue("contactHandle", 0, $arg)
    }
    
    property get linkStatus () : gw.api.contact.ContactSystemLinkStatus {
      return getRequireValue("linkStatus", 0) as gw.api.contact.ContactSystemLinkStatus
    }
    
    property set linkStatus ($arg :  gw.api.contact.ContactSystemLinkStatus) {
      setRequireValue("linkStatus", 0, $arg)
    }
    
    property get showRoles () : boolean {
      return getRequireValue("showRoles", 0) as java.lang.Boolean
    }
    
    property set showRoles ($arg :  boolean) {
      setRequireValue("showRoles", 0, $arg)
    }
    
    property get Company() : Company { return contactHandle.Contact as Company; }
          
    property get ClaimContact() : ClaimContact { return contactHandle typeis ClaimContact ? (contactHandle) : null; }
    
    
  }
  
  
}