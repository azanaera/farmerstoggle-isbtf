package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/contacts/AdditionalInfoInputSet.PersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalInfoInputSet_PersonVendorExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/contacts/AdditionalInfoInputSet.PersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on DateInput (id=PersonVendorValidFrom_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 84, column 46
    function available_37 () : java.lang.Boolean {
      return claimContact != null
    }
    
    // 'def' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 30, column 70
    function def_onEnter_0 (def :  pcf.DoctorAdditionalInfoInputSet_Doctor) : void {
      def.onEnter(contactHandle)
    }
    
    // 'def' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 60, column 78
    function def_onEnter_24 (def :  pcf.BusinessContactInfoInputSet) : void {
      def.onEnter(contactHandle, claimContact, claim)
    }
    
    // 'def' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 33, column 74
    function def_onEnter_3 (def :  pcf.AttorneyAdditionalInfoInputSet_Attorney) : void {
      def.onEnter(contactHandle)
    }
    
    // 'def' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 73, column 82
    function def_onEnter_32 (def :  pcf.VendorW9InfoInputSet) : void {
      def.onEnter(contactHandle)
    }
    
    // 'def' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 30, column 70
    function def_refreshVariables_1 (def :  pcf.DoctorAdditionalInfoInputSet_Doctor) : void {
      def.refreshVariables(contactHandle)
    }
    
    // 'def' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 60, column 78
    function def_refreshVariables_25 (def :  pcf.BusinessContactInfoInputSet) : void {
      def.refreshVariables(contactHandle, claimContact, claim)
    }
    
    // 'def' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 73, column 82
    function def_refreshVariables_33 (def :  pcf.VendorW9InfoInputSet) : void {
      def.refreshVariables(contactHandle)
    }
    
    // 'def' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 33, column 74
    function def_refreshVariables_4 (def :  pcf.AttorneyAdditionalInfoInputSet_Attorney) : void {
      def.refreshVariables(contactHandle)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 58, column 37
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      PersonVendor.PreferredCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on PrivacyInput (id=SSN_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 70, column 35
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      PersonVendor.TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=PersonVendorValidFrom_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 84, column 46
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimContact.ContactValidFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=PersonVendorValidTo_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 90, column 44
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimContact.ContactValidTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=SSN_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 70, column 35
    function encryptionExpression_29 (VALUE :  java.lang.String) : java.lang.String {
      return PersonVendor.maskTaxId(VALUE)
    }
    
    // 'mode' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 30, column 70
    function mode_2 () : java.lang.Object {
      return PersonVendor typeis Doctor ? "Doctor" : null
    }
    
    // 'mode' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 33, column 74
    function mode_5 () : java.lang.Object {
      return PersonVendor typeis Attorney ? "Attorney" : null
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsPreferredVendor_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 43, column 39
    function valueRoot_12 () : java.lang.Object {
      return PersonVendor
    }
    
    // 'value' attribute on DateInput (id=PersonVendorValidFrom_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 84, column 46
    function valueRoot_40 () : java.lang.Object {
      return claimContact
    }
    
    // 'value' attribute on TextInput (id=OverallReviewScore_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 39, column 127
    function valueRoot_8 () : java.lang.Object {
      return contactHandle.Contact
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsPreferredVendor_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 43, column 39
    function value_11 () : java.lang.Boolean {
      return PersonVendor.Preferred
    }
    
    // 'value' attribute on TextInput (id=VendorID_Ext_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 47, column 42
    function value_14 () : java.lang.String {
      return PersonVendor.VendorNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=IsVendorAvailable_Ext_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 52, column 55
    function value_17 () : typekey.VendorAvailabilityType_Ext {
      return PersonVendor.VendorAvailability_Ext
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 58, column 37
    function value_20 () : typekey.Currency {
      return PersonVendor.PreferredCurrency
    }
    
    // 'value' attribute on PrivacyInput (id=SSN_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 70, column 35
    function value_26 () : java.lang.String {
      return PersonVendor.TaxID
    }
    
    // 'value' attribute on BooleanRadioInput (id=Backupwithholding_Ext_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 78, column 51
    function value_34 () : java.lang.Boolean {
      return PersonVendor.Backupwithholding_Ext
    }
    
    // 'value' attribute on DateInput (id=PersonVendorValidFrom_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 84, column 46
    function value_38 () : java.util.Date {
      return claimContact.ContactValidFrom
    }
    
    // 'value' attribute on DateInput (id=PersonVendorValidTo_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 90, column 44
    function value_44 () : java.util.Date {
      return claimContact.ContactValidTo
    }
    
    // 'value' attribute on TextInput (id=OverallReviewScore_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 39, column 127
    function value_7 () : java.lang.Integer {
      return contactHandle.Contact.Score
    }
    
    // 'visible' attribute on InputSetRef at AdditionalInfoInputSet.PersonVendor.pcf: line 73, column 82
    function visible_31 () : java.lang.Boolean {
      return gw.api.admin.BaseAdminUtil.getDefaultCountry() == Country.TC_US
    }
    
    // 'visible' attribute on TextInput (id=OverallReviewScore_Input) at AdditionalInfoInputSet.PersonVendor.pcf: line 39, column 127
    function visible_6 () : java.lang.Boolean {
      return (contactHandle.Contact.Score != null) or util.ReviewPageHelper.shouldDisplayReviewTab(contactHandle.Contact)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get claimContact () : ClaimContact {
      return getRequireValue("claimContact", 0) as ClaimContact
    }
    
    property set claimContact ($arg :  ClaimContact) {
      setRequireValue("claimContact", 0, $arg)
    }
    
    property get contactHandle () : gw.api.contact.ContactHandle {
      return getRequireValue("contactHandle", 0) as gw.api.contact.ContactHandle
    }
    
    property set contactHandle ($arg :  gw.api.contact.ContactHandle) {
      setRequireValue("contactHandle", 0, $arg)
    }
    
    
    property get PersonVendor() : PersonVendor { return contactHandle.Contact as PersonVendor; }
        
    
    
  }
  
  
}