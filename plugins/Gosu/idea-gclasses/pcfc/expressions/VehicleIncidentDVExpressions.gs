package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.util.Set
@javax.annotation.processing.Generated("config/web/pcf/shared/vehicle/VehicleIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehicleIncidentDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/vehicle/VehicleIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleIncidentDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_153 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.driver), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_155 () : void {
      if (VehicleIncident.driver != null) { ClaimContactDetailPopup.push(VehicleIncident.driver, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_156 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.driver, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_192 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_194 () : void {
      if (VehicleIncident.incidentowner != null) { ClaimContactDetailPopup.push(VehicleIncident.incidentowner, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_197 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.incidentowner, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_390 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_392 () : void {
      if (VehicleIncident.InsuredRep != null) { ClaimContactDetailPopup.push(VehicleIncident.InsuredRep, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_394 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.InsuredRep, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_425 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.recoveryagent), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_427 () : void {
      if (VehicleIncident.recoveryagent != null) { ClaimContactDetailPopup.push(VehicleIncident.recoveryagent, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_429 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.recoveryagent, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_154 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.driver), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_157 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.driver, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_193 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_198 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.incidentowner, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_391 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_395 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.InsuredRep, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_426 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.recoveryagent), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_430 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.recoveryagent, Claim)
    }
    
    // 'available' attribute on Reflect at VehicleIncidentDV.pcf: line 86, column 31
    function available_24 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return Claim.canEditVehicle(VALUE)
    }
    
    // 'available' attribute on TextInput (id=Vehicle_Year_Input) at VehicleIncidentDV.pcf: line 82, column 39
    function available_27 () : java.lang.Boolean {
      return Claim.canEditVehicle(VehicleIncident.Vehicle)
    }
    
    // 'def' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_150 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.driver), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_189 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.incidentowner), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentDV.pcf: line 379, column 57
    function def_onEnter_246 (def :  pcf.LoanInformationInputSet) : void {
      def.onEnter(VehicleIncident)
    }
    
    // 'def' attribute on ListViewInput (id=Driver_Citations) at VehicleIncidentDV.pcf: line 386, column 27
    function def_onEnter_248 (def :  pcf.DriverCitationsLV) : void {
      def.onEnter(VehicleIncident)
    }
    
    // 'def' attribute on ListViewInput (id=Contacts) at VehicleIncidentDV.pcf: line 398, column 27
    function def_onEnter_250 (def :  pcf.EditableIncidentContactsLV) : void {
      def.onEnter(VehicleIncident)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at VehicleIncidentDV.pcf: line 418, column 40
    function def_onEnter_256 (def :  pcf.AppraisalServiceInputSet) : void {
      def.onEnter(PropertyAppraisalServiceRequest, VehicleIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef (id=RentalServiceInputSet) at VehicleIncidentDV.pcf: line 421, column 37
    function def_onEnter_258 (def :  pcf.RentalServiceInputSet) : void {
      def.onEnter(RentalServiceRequest, VehicleIncident, unusedServiceRequests)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentDV.pcf: line 423, column 145
    function def_onEnter_260 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.onEnter(Claim, VehicleIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on InputSetRef (id=LocationPhone_Ext) at VehicleIncidentDV.pcf: line 515, column 33
    function def_onEnter_310 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.EntityPhoneDelegate(VehicleIncident, VehicleIncident#CellPhone_Ext), DisplayKey.get("Toggle.Web.VehicleIncidentDV.Phone"), false))
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentDV.pcf: line 523, column 48
    function def_onEnter_319 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_387 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.InsuredRep), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_422 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.recoveryagent), null, Claim)
    }
    
    // 'def' attribute on InputSetRef (id=RecoveryAddress) at VehicleIncidentDV.pcf: line 669, column 143
    function def_onEnter_450 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(VehicleIncident.RecoveryAddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_151 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.driver), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_190 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.incidentowner), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentDV.pcf: line 379, column 57
    function def_refreshVariables_247 (def :  pcf.LoanInformationInputSet) : void {
      def.refreshVariables(VehicleIncident)
    }
    
    // 'def' attribute on ListViewInput (id=Driver_Citations) at VehicleIncidentDV.pcf: line 386, column 27
    function def_refreshVariables_249 (def :  pcf.DriverCitationsLV) : void {
      def.refreshVariables(VehicleIncident)
    }
    
    // 'def' attribute on ListViewInput (id=Contacts) at VehicleIncidentDV.pcf: line 398, column 27
    function def_refreshVariables_251 (def :  pcf.EditableIncidentContactsLV) : void {
      def.refreshVariables(VehicleIncident)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at VehicleIncidentDV.pcf: line 418, column 40
    function def_refreshVariables_257 (def :  pcf.AppraisalServiceInputSet) : void {
      def.refreshVariables(PropertyAppraisalServiceRequest, VehicleIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef (id=RentalServiceInputSet) at VehicleIncidentDV.pcf: line 421, column 37
    function def_refreshVariables_259 (def :  pcf.RentalServiceInputSet) : void {
      def.refreshVariables(RentalServiceRequest, VehicleIncident, unusedServiceRequests)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentDV.pcf: line 423, column 145
    function def_refreshVariables_261 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.refreshVariables(Claim, VehicleIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on InputSetRef (id=LocationPhone_Ext) at VehicleIncidentDV.pcf: line 515, column 33
    function def_refreshVariables_311 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.EntityPhoneDelegate(VehicleIncident, VehicleIncident#CellPhone_Ext), DisplayKey.get("Toggle.Web.VehicleIncidentDV.Phone"), false))
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentDV.pcf: line 523, column 48
    function def_refreshVariables_320 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_388 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.InsuredRep), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_423 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.recoveryagent), null, Claim)
    }
    
    // 'def' attribute on InputSetRef (id=RecoveryAddress) at VehicleIncidentDV.pcf: line 669, column 143
    function def_refreshVariables_451 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(VehicleIncident.RecoveryAddressOwner)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LicensePlate_Input) at VehicleIncidentDV.pcf: line 179, column 54
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.LicensePlate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_BoatType_Input) at VehicleIncidentDV.pcf: line 192, column 60
    function defaultSetter_116 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.BoatType = (__VALUE_TO_SET as typekey.BoatType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_OffRoadStyle_Input) at VehicleIncidentDV.pcf: line 205, column 109
    function defaultSetter_127 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.OffRoadStyle = (__VALUE_TO_SET as typekey.OffRoadVehicleStyle)
    }
    
    // 'value' attribute on TypeKeyInput (id=Potential_Side_Hustle_Involved_Ext_Input) at VehicleIncidentDV.pcf: line 217, column 74
    function defaultSetter_134 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.PotentialSideHustle_Ext = (__VALUE_TO_SET as typekey.PotentialSideHustle_Ext)
    }
    
    // 'value' attribute on TypeKeyInput (id=Side_Hustle_Phase_Ext_Input) at VehicleIncidentDV.pcf: line 224, column 74
    function defaultSetter_140 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.SideHustlePhase_Ext = (__VALUE_TO_SET as typekey.SideHustlePhase_Ext)
    }
    
    // 'value' attribute on TypeKeyInput (id=Child_Safety_Seat_Ext_Input) at VehicleIncidentDV.pcf: line 232, column 24
    function defaultSetter_146 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.ChildSafetySeat_Ext = (__VALUE_TO_SET as typekey.ChildSafetySeat_Ext)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at VehicleIncidentDV.pcf: line 47, column 43
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.LossParty = (__VALUE_TO_SET as typekey.LossPartyType)
    }
    
    // 'value' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_161 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.driver = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=ReasonForUse_Input) at VehicleIncidentDV.pcf: line 253, column 43
    function defaultSetter_172 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleUseReason = (__VALUE_TO_SET as typekey.ReasonForUse)
    }
    
    // 'value' attribute on TypeKeyInput (id=RelationToInsured_Input) at VehicleIncidentDV.pcf: line 261, column 24
    function defaultSetter_180 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.DriverRelation = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=OwnersPermission_Input) at VehicleIncidentDV.pcf: line 290, column 24
    function defaultSetter_185 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.OwnersPermission = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_201 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.incidentowner = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_VehicleType_Input) at VehicleIncidentDV.pcf: line 64, column 41
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleType = (__VALUE_TO_SET as typekey.VehicleType)
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=NonRatedDriver_Ext_Input) at VehicleIncidentDV.pcf: line 324, column 48
    function defaultSetter_210 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.NonRatedDriver_Ext = (__VALUE_TO_SET as typekey.NonRatedDriver_Ext)
    }
    
    // 'value' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Input) at VehicleIncidentDV.pcf: line 331, column 62
    function defaultSetter_215 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.MinorOnPolicy = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Percentagedriven_Input) at VehicleIncidentDV.pcf: line 341, column 110
    function defaultSetter_221 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.PercentageDrivenByMinor = (__VALUE_TO_SET as typekey.PercentageDriven)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at VehicleIncidentDV.pcf: line 436, column 39
    function defaultSetter_263 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleParked_Input) at VehicleIncidentDV.pcf: line 443, column 47
    function defaultSetter_267 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleParked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=LossDesc_Input) at VehicleIncidentDV.pcf: line 461, column 58
    function defaultSetter_272 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.LossDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at VehicleIncidentDV.pcf: line 467, column 51
    function defaultSetter_278 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AirbagsDeployed = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_EquipmentFailure_Input) at VehicleIncidentDV.pcf: line 472, column 51
    function defaultSetter_283 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.EquipmentFailure = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=GlassRepairAndReplaceRadioButton_Ext_Input) at VehicleIncidentDV.pcf: line 478, column 55
    function defaultSetter_287 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.GlassRepairAndReplace_Ext = (__VALUE_TO_SET as typekey.GlassRepairAndReplace_Ext)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at VehicleIncidentDV.pcf: line 82, column 39
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Year = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Operable_Input) at VehicleIncidentDV.pcf: line 483, column 50
    function defaultSetter_291 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleOperable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Theft_OdomRead_Input) at VehicleIncidentDV.pcf: line 490, column 24
    function defaultSetter_295 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.OdomRead = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at VehicleIncidentDV.pcf: line 497, column 44
    function defaultSetter_299 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.TotalLoss = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at VehicleIncidentDV.pcf: line 502, column 47
    function defaultSetter_303 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationType_Ext_Input) at VehicleIncidentDV.pcf: line 511, column 55
    function defaultSetter_307 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.LocationType_Ext = (__VALUE_TO_SET as typekey.VehicleDamageLocation_Ext)
    }
    
    // 'value' attribute on TextInput (id=Address_Description_Ext_Input) at VehicleIncidentDV.pcf: line 521, column 51
    function defaultSetter_315 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Address.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Collision_Indicator_Input) at VehicleIncidentDV.pcf: line 531, column 43
    function defaultSetter_322 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Collision = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HitAndRun_Input) at VehicleIncidentDV.pcf: line 539, column 45
    function defaultSetter_327 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.HitAndRun = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PhantomVehicle_Input) at VehicleIncidentDV.pcf: line 547, column 46
    function defaultSetter_333 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.PhantomVehicle = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at VehicleIncidentDV.pcf: line 554, column 81
    function defaultSetter_339 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Speed = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleDirection_Input) at VehicleIncidentDV.pcf: line 561, column 46
    function defaultSetter_345 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleDirection = (__VALUE_TO_SET as typekey.VehicleDirection)
    }
    
    // 'value' attribute on TypeKeyInput (id=CollisionPoint_Input) at VehicleIncidentDV.pcf: line 568, column 46
    function defaultSetter_351 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.CollisionPoint = (__VALUE_TO_SET as typekey.CollisionPoint)
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_TrafficViolation_Input) at VehicleIncidentDV.pcf: line 575, column 46
    function defaultSetter_357 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.TrafficViolation = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_Indicator_Input) at VehicleIncidentDV.pcf: line 585, column 131
    function defaultSetter_364 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehStolenInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_VehLockInd_Input) at VehicleIncidentDV.pcf: line 593, column 48
    function defaultSetter_370 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehLockInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_AntiThftInd_Input) at VehicleIncidentDV.pcf: line 601, column 48
    function defaultSetter_376 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AntiThftInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Make_Input) at VehicleIncidentDV.pcf: line 94, column 46
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Make = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Theft_AffdvCmplInd_Input) at VehicleIncidentDV.pcf: line 611, column 48
    function defaultSetter_382 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AffdvCmplInd = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_398 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.InsuredRep = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on DateInput (id=RecoveryDate_Input) at VehicleIncidentDV.pcf: line 641, column 49
    function defaultSetter_411 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.RecovDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryState_Input) at VehicleIncidentDV.pcf: line 648, column 49
    function defaultSetter_417 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.RecovState = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_433 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.recoveryagent = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryCondition_Input) at VehicleIncidentDV.pcf: line 663, column 48
    function defaultSetter_445 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.RecovCondType = (__VALUE_TO_SET as typekey.RecovCondType)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Model_Input) at VehicleIncidentDV.pcf: line 106, column 47
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Model = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 41, column 37
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle = (__VALUE_TO_SET as entity.Vehicle)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_Style_Input) at VehicleIncidentDV.pcf: line 119, column 42
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Style = (__VALUE_TO_SET as typekey.VehicleStyle)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Color_Input) at VehicleIncidentDV.pcf: line 131, column 47
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Color = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VIN_Input) at VehicleIncidentDV.pcf: line 143, column 155
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Vin = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_SerialNumber_Input) at VehicleIncidentDV.pcf: line 155, column 153
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.SerialNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_State_Input) at VehicleIncidentDV.pcf: line 168, column 42
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'editable' attribute on TextInput (id=Address_Description_Ext_Input) at VehicleIncidentDV.pcf: line 521, column 51
    function editable_312 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.CCAddressOwnerFieldId.DESCRIPTION)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Driver_LicenseState_Input) at VehicleIncidentDV.pcf: line 372, column 42
    function filter_244 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_DRIVING_LIC)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Vehicle_State_Input) at VehicleIncidentDV.pcf: line 168, column 42
    function filter_98 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_VEHICLE_REG)
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentDV.pcf: line 16, column 21
    function initialValue_0 () : Claim {
      return VehicleIncident.Claim
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentDV.pcf: line 20, column 22
    function initialValue_1 () : String {
      return gw.vendormanagement.SpecialistServiceCodeConstants.AUTOAPPRAISAL
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentDV.pcf: line 24, column 51
    function initialValue_2 () : java.util.Set<ServiceRequest> {
      return createOtherServiceRequests()
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentDV.pcf: line 28, column 45
    function initialValue_3 () : gw.api.address.CCAddressOwner {
      return VehicleIncident.VehicleAddressOwner_Ext
    }
    
    // 'newValue' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 41, column 37
    function newValue_7 () : java.lang.Object {
      return new Vehicle(VehicleIncident)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_158 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.driver); var result = eval("VehicleIncident.driver = Claim.resolveContact(VehicleIncident.driver) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_199 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.incidentowner); var result = eval("VehicleIncident.incidentowner = Claim.resolveContact(VehicleIncident.incidentowner) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_396 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.InsuredRep); var result = eval("VehicleIncident.InsuredRep = Claim.resolveContact(VehicleIncident.InsuredRep) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_431 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.recoveryagent); var result = eval("VehicleIncident.recoveryagent = Claim.resolveContact(VehicleIncident.recoveryagent) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 183, column 39
    function reflectionValue_102 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.LicensePlate
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 196, column 35
    function reflectionValue_111 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.BoatType
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 209, column 39
    function reflectionValue_122 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.OffRoadStyle
    }
    
    // Reflect at VehicleIncidentDV.pcf: line 49, column 39
    function reflectionValue_13 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return (VehicleIncident.Claim.Policy.isPolicyVehicle(VALUE)) ? (typekey.LossPartyType.TC_INSURED) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at VehicleIncidentDV.pcf: line 263, column 38
    function reflectionValue_177 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (VALUE==Claim.reporter) ? (Claim.ReportedByType) : (VALUE==Claim.maincontact) ? (Claim.MainContactType) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at VehicleIncidentDV.pcf: line 292, column 42
    function reflectionValue_183 (TRIGGER_INDEX :  int, VALUE :  typekey.PersonRelationType) : java.lang.Object {
      return (VALUE == TC_SELF) ? (true) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at VehicleIncidentDV.pcf: line 66, column 39
    function reflectionValue_19 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return (VehicleIncident.Claim.Policy.isPolicyVehicle(VALUE)) ? (typekey.VehicleType.TC_LISTED) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // ClaimContactInput (id=Owner_Picker_Input) at VehicleIncidentDV.pcf: line 310, column 42
    function reflectionValue_196 (TRIGGER_INDEX :  int, VALUE :  typekey.PersonRelationType) : java.lang.Object {
      return (VALUE==TC_SELF) ? (VehicleIncident.driver) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 348, column 44
    function reflectionValue_225 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 357, column 53
    function reflectionValue_230 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 365, column 40
    function reflectionValue_235 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.LicenseNumber
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 375, column 39
    function reflectionValue_240 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.LicenseState
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 86, column 31
    function reflectionValue_25 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Year
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 98, column 31
    function reflectionValue_34 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Make
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 110, column 32
    function reflectionValue_43 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Model
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 123, column 32
    function reflectionValue_52 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Style
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 135, column 32
    function reflectionValue_61 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Color
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 147, column 30
    function reflectionValue_70 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Vin
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 159, column 39
    function reflectionValue_81 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.SerialNumber
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 172, column 32
    function reflectionValue_92 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.State
    }
    
    // 'required' attribute on TypeKeyInput (id=Child_Safety_Seat_Ext_Input) at VehicleIncidentDV.pcf: line 232, column 24
    function required_144 () : java.lang.Boolean {
      return Claim.State != ClaimState.TC_DRAFT
    }
    
    // 'required' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function required_159 () : java.lang.Boolean {
      return !VehicleIncident.VehicleParked
    }
    
    // 'required' attribute on TypeKeyInput (id=RelationToInsured_Input) at VehicleIncidentDV.pcf: line 261, column 24
    function required_178 () : java.lang.Boolean {
      return (VehicleIncident.LossParty ==  TC_INSURED) and !VehicleIncident.VehicleParked
    }
    
    // 'required' attribute on TextInput (id=Address_Description_Ext_Input) at VehicleIncidentDV.pcf: line 521, column 51
    function required_313 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.CCAddressOwnerFieldId.DESCRIPTION)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_163 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_203 () : java.lang.Object {
      return Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 41, column 37
    function valueRange_8 () : java.lang.Object {
      return VehicleIncident.AvailableVehicles
    }
    
    // 'value' attribute on TextInput (id=Driver_Phone_Input) at VehicleIncidentDV.pcf: line 345, column 58
    function valueRoot_228 () : java.lang.Object {
      return VehicleIncident.driver
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at VehicleIncidentDV.pcf: line 82, column 39
    function valueRoot_30 () : java.lang.Object {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextInput (id=Address_Description_Ext_Input) at VehicleIncidentDV.pcf: line 521, column 51
    function valueRoot_316 () : java.lang.Object {
      return addressOwner.Address
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 41, column 37
    function valueRoot_6 () : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LicensePlate_Input) at VehicleIncidentDV.pcf: line 179, column 54
    function value_105 () : java.lang.String {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_BoatType_Input) at VehicleIncidentDV.pcf: line 192, column 60
    function value_115 () : typekey.BoatType {
      return VehicleIncident.Vehicle.BoatType
    }
    
    // 'value' attribute on ReflectCondition at VehicleIncidentDV.pcf: line 52, column 55
    function value_12 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return typekey.LossPartyType.TC_INSURED
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_OffRoadStyle_Input) at VehicleIncidentDV.pcf: line 205, column 109
    function value_126 () : typekey.OffRoadVehicleStyle {
      return VehicleIncident.Vehicle.OffRoadStyle
    }
    
    // 'value' attribute on TypeKeyInput (id=Potential_Side_Hustle_Involved_Ext_Input) at VehicleIncidentDV.pcf: line 217, column 74
    function value_133 () : typekey.PotentialSideHustle_Ext {
      return VehicleIncident.PotentialSideHustle_Ext
    }
    
    // 'value' attribute on TypeKeyInput (id=Side_Hustle_Phase_Ext_Input) at VehicleIncidentDV.pcf: line 224, column 74
    function value_139 () : typekey.SideHustlePhase_Ext {
      return VehicleIncident.SideHustlePhase_Ext
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at VehicleIncidentDV.pcf: line 47, column 43
    function value_14 () : typekey.LossPartyType {
      return VehicleIncident.LossParty
    }
    
    // 'value' attribute on TypeKeyInput (id=Child_Safety_Seat_Ext_Input) at VehicleIncidentDV.pcf: line 232, column 24
    function value_145 () : typekey.ChildSafetySeat_Ext {
      return VehicleIncident.ChildSafetySeat_Ext
    }
    
    // 'value' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_160 () : entity.Person {
      return VehicleIncident.driver
    }
    
    // 'value' attribute on TypeKeyInput (id=ReasonForUse_Input) at VehicleIncidentDV.pcf: line 253, column 43
    function value_171 () : typekey.ReasonForUse {
      return VehicleIncident.VehicleUseReason
    }
    
    // 'value' attribute on ReflectCondition at VehicleIncidentDV.pcf: line 269, column 43
    function value_175 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on ReflectCondition at VehicleIncidentDV.pcf: line 272, column 44
    function value_176 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return Claim.MainContactType
    }
    
    // 'value' attribute on TypeKeyInput (id=RelationToInsured_Input) at VehicleIncidentDV.pcf: line 261, column 24
    function value_179 () : typekey.PersonRelationType {
      return VehicleIncident.DriverRelation
    }
    
    // 'value' attribute on ReflectCondition at VehicleIncidentDV.pcf: line 69, column 52
    function value_18 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return typekey.VehicleType.TC_LISTED
    }
    
    // 'value' attribute on BooleanRadioInput (id=OwnersPermission_Input) at VehicleIncidentDV.pcf: line 290, column 24
    function value_184 () : java.lang.Boolean {
      return VehicleIncident.OwnersPermission
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Picker_Input) at VehicleIncidentDV.pcf: line 313, column 45
    function value_195 (TRIGGER_INDEX :  int, VALUE :  typekey.PersonRelationType) : java.lang.Object {
      return VehicleIncident.driver
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_VehicleType_Input) at VehicleIncidentDV.pcf: line 64, column 41
    function value_20 () : typekey.VehicleType {
      return VehicleIncident.VehicleType
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_200 () : entity.Contact {
      return VehicleIncident.incidentowner
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=NonRatedDriver_Ext_Input) at VehicleIncidentDV.pcf: line 324, column 48
    function value_209 () : typekey.NonRatedDriver_Ext {
      return VehicleIncident.NonRatedDriver_Ext
    }
    
    // 'value' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Input) at VehicleIncidentDV.pcf: line 331, column 62
    function value_214 () : typekey.YesNo {
      return VehicleIncident.MinorOnPolicy
    }
    
    // 'value' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Percentagedriven_Input) at VehicleIncidentDV.pcf: line 341, column 110
    function value_220 () : typekey.PercentageDriven {
      return VehicleIncident.PercentageDrivenByMinor
    }
    
    // 'value' attribute on TextInput (id=Driver_Phone_Input) at VehicleIncidentDV.pcf: line 345, column 58
    function value_227 () : java.lang.String {
      return VehicleIncident.driver.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextAreaInput (id=Driver_Address_Input) at VehicleIncidentDV.pcf: line 354, column 67
    function value_232 () : java.lang.String {
      return VehicleIncident.driver.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Driver_License_Input) at VehicleIncidentDV.pcf: line 362, column 54
    function value_237 () : java.lang.String {
      return VehicleIncident.driver.LicenseNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Driver_LicenseState_Input) at VehicleIncidentDV.pcf: line 372, column 42
    function value_242 () : typekey.Jurisdiction {
      return VehicleIncident.driver.LicenseState
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at VehicleIncidentDV.pcf: line 436, column 39
    function value_262 () : java.lang.String {
      return VehicleIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleParked_Input) at VehicleIncidentDV.pcf: line 443, column 47
    function value_266 () : java.lang.Boolean {
      return VehicleIncident.VehicleParked
    }
    
    // 'value' attribute on TextInput (id=LossDesc_Input) at VehicleIncidentDV.pcf: line 461, column 58
    function value_271 () : java.lang.String {
      return VehicleIncident.LossDesc
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at VehicleIncidentDV.pcf: line 467, column 51
    function value_277 () : java.lang.Boolean {
      return VehicleIncident.AirbagsDeployed
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at VehicleIncidentDV.pcf: line 82, column 39
    function value_28 () : java.lang.Integer {
      return VehicleIncident.Vehicle.Year
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_EquipmentFailure_Input) at VehicleIncidentDV.pcf: line 472, column 51
    function value_282 () : java.lang.Boolean {
      return VehicleIncident.EquipmentFailure
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=GlassRepairAndReplaceRadioButton_Ext_Input) at VehicleIncidentDV.pcf: line 478, column 55
    function value_286 () : typekey.GlassRepairAndReplace_Ext {
      return VehicleIncident.GlassRepairAndReplace_Ext
    }
    
    // 'value' attribute on BooleanRadioInput (id=Operable_Input) at VehicleIncidentDV.pcf: line 483, column 50
    function value_290 () : java.lang.Boolean {
      return VehicleIncident.VehicleOperable
    }
    
    // 'value' attribute on TextInput (id=Theft_OdomRead_Input) at VehicleIncidentDV.pcf: line 490, column 24
    function value_294 () : java.lang.Integer {
      return VehicleIncident.OdomRead
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at VehicleIncidentDV.pcf: line 497, column 44
    function value_298 () : java.lang.Boolean {
      return VehicleIncident.TotalLoss
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at VehicleIncidentDV.pcf: line 502, column 47
    function value_302 () : gw.api.financials.CurrencyAmount {
      return VehicleIncident.LossEstimate
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationType_Ext_Input) at VehicleIncidentDV.pcf: line 511, column 55
    function value_306 () : typekey.VehicleDamageLocation_Ext {
      return VehicleIncident.LocationType_Ext
    }
    
    // 'value' attribute on TextInput (id=Address_Description_Ext_Input) at VehicleIncidentDV.pcf: line 521, column 51
    function value_314 () : java.lang.String {
      return addressOwner.Address.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Collision_Indicator_Input) at VehicleIncidentDV.pcf: line 531, column 43
    function value_321 () : java.lang.Boolean {
      return VehicleIncident.Collision
    }
    
    // 'value' attribute on BooleanRadioInput (id=HitAndRun_Input) at VehicleIncidentDV.pcf: line 539, column 45
    function value_326 () : java.lang.Boolean {
      return VehicleIncident.HitAndRun
    }
    
    // 'value' attribute on BooleanRadioInput (id=PhantomVehicle_Input) at VehicleIncidentDV.pcf: line 547, column 46
    function value_332 () : java.lang.Boolean {
      return VehicleIncident.PhantomVehicle
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at VehicleIncidentDV.pcf: line 554, column 81
    function value_338 () : java.lang.Integer {
      return VehicleIncident.Speed
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleDirection_Input) at VehicleIncidentDV.pcf: line 561, column 46
    function value_344 () : typekey.VehicleDirection {
      return VehicleIncident.VehicleDirection
    }
    
    // 'value' attribute on TypeKeyInput (id=CollisionPoint_Input) at VehicleIncidentDV.pcf: line 568, column 46
    function value_350 () : typekey.CollisionPoint {
      return VehicleIncident.CollisionPoint
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_TrafficViolation_Input) at VehicleIncidentDV.pcf: line 575, column 46
    function value_356 () : typekey.YesNo {
      return VehicleIncident.TrafficViolation
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_Indicator_Input) at VehicleIncidentDV.pcf: line 585, column 131
    function value_363 () : java.lang.Boolean {
      return VehicleIncident.VehStolenInd
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_VehLockInd_Input) at VehicleIncidentDV.pcf: line 593, column 48
    function value_369 () : java.lang.Boolean {
      return VehicleIncident.VehLockInd
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Make_Input) at VehicleIncidentDV.pcf: line 94, column 46
    function value_37 () : java.lang.String {
      return VehicleIncident.Vehicle.Make
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_AntiThftInd_Input) at VehicleIncidentDV.pcf: line 601, column 48
    function value_375 () : java.lang.Boolean {
      return VehicleIncident.AntiThftInd
    }
    
    // 'value' attribute on TypeKeyInput (id=Theft_AffdvCmplInd_Input) at VehicleIncidentDV.pcf: line 611, column 48
    function value_381 () : typekey.YesNo {
      return VehicleIncident.AffdvCmplInd
    }
    
    // 'value' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_397 () : entity.Contact {
      return VehicleIncident.InsuredRep
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 41, column 37
    function value_4 () : entity.Vehicle {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on DateInput (id=RecoveryDate_Input) at VehicleIncidentDV.pcf: line 641, column 49
    function value_410 () : java.util.Date {
      return VehicleIncident.RecovDate
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryState_Input) at VehicleIncidentDV.pcf: line 648, column 49
    function value_416 () : typekey.State {
      return VehicleIncident.RecovState
    }
    
    // 'value' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_432 () : entity.Contact {
      return VehicleIncident.recoveryagent
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryCondition_Input) at VehicleIncidentDV.pcf: line 663, column 48
    function value_444 () : typekey.RecovCondType {
      return VehicleIncident.RecovCondType
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Model_Input) at VehicleIncidentDV.pcf: line 106, column 47
    function value_46 () : java.lang.String {
      return VehicleIncident.Vehicle.Model
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_Style_Input) at VehicleIncidentDV.pcf: line 119, column 42
    function value_55 () : typekey.VehicleStyle {
      return VehicleIncident.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Color_Input) at VehicleIncidentDV.pcf: line 131, column 47
    function value_64 () : java.lang.String {
      return VehicleIncident.Vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VIN_Input) at VehicleIncidentDV.pcf: line 143, column 155
    function value_74 () : java.lang.String {
      return VehicleIncident.Vehicle.Vin
    }
    
    // 'value' attribute on TextInput (id=Vehicle_SerialNumber_Input) at VehicleIncidentDV.pcf: line 155, column 153
    function value_85 () : java.lang.String {
      return VehicleIncident.Vehicle.SerialNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_State_Input) at VehicleIncidentDV.pcf: line 168, column 42
    function value_95 () : typekey.Jurisdiction {
      return VehicleIncident.Vehicle.State
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_164 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_164 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_164 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_204 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_204 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_204 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_401 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_401 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_401 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_436 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_436 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_436 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 41, column 37
    function verifyValueRangeIsAllowedType_9 ($$arg :  entity.Vehicle[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 41, column 37
    function verifyValueRangeIsAllowedType_9 ($$arg :  gw.api.database.IQueryBeanResult<entity.Vehicle>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 41, column 37
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 41, column 37
    function verifyValueRange_10 () : void {
      var __valueRangeArg = VehicleIncident.AvailableVehicles
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_165 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_164(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_205 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_204(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_402 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_401(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_437 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_436(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Driver_Picker_Input) at VehicleIncidentDV.pcf: line 247, column 25
    function verifyValueType_170 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TypeKeyInput (id=Vehicle_BoatType_Input) at VehicleIncidentDV.pcf: line 192, column 60
    function visible_114 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style == TC_BOAT
    }
    
    // 'visible' attribute on TypeKeyInput (id=Vehicle_OffRoadStyle_Input) at VehicleIncidentDV.pcf: line 205, column 109
    function visible_125 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style == TC_ATV or VehicleIncident.Vehicle.Style == TC_SNOWMOBILE
    }
    
    // 'visible' attribute on TypeKeyInput (id=Potential_Side_Hustle_Involved_Ext_Input) at VehicleIncidentDV.pcf: line 217, column 74
    function visible_132 () : java.lang.Boolean {
      return VehicleIncident.LossParty == LossPartyType.TC_INSURED 
    }
    
    // 'visible' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_149 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_152 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.driver), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_191 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Input) at VehicleIncidentDV.pcf: line 331, column 62
    function visible_213 () : java.lang.Boolean {
      return VehicleIncident.DriverRelation == TC_CHILD
    }
    
    // 'visible' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Percentagedriven_Input) at VehicleIncidentDV.pcf: line 341, column 110
    function visible_219 () : java.lang.Boolean {
      return  VehicleIncident.DriverRelToOwner == TC_CHILD and VehicleIncident.MinorOnPolicy == TC_NO 
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at VehicleIncidentDV.pcf: line 410, column 37
    function visible_252 () : java.lang.Boolean {
      return Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at VehicleIncidentDV.pcf: line 415, column 72
    function visible_254 () : java.lang.Boolean {
      return not Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on TextInput (id=LossDesc_Input) at VehicleIncidentDV.pcf: line 461, column 58
    function visible_270 () : java.lang.Boolean {
      return VehicleIncident.LossOccured==TC_OTHER
    }
    
    // 'visible' attribute on TextInput (id=Speed_Input) at VehicleIncidentDV.pcf: line 554, column 81
    function visible_337 () : java.lang.Boolean {
      return VehicleIncident.Collision and !VehicleIncident.VehicleParked
    }
    
    // 'visible' attribute on Label at VehicleIncidentDV.pcf: line 579, column 98
    function visible_361 () : java.lang.Boolean {
      return VehicleIncident.LossParty ==  TC_INSURED or VehicleIncident.LossParty == null
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Theft_Indicator_Input) at VehicleIncidentDV.pcf: line 585, column 131
    function visible_362 () : java.lang.Boolean {
      return (VehicleIncident.LossParty ==  TC_INSURED or VehicleIncident.LossParty == null) or VehicleIncident.VehStolenInd
    }
    
    // 'visible' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_389 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_393 () : java.lang.Boolean {
      return VehicleIncident.AffdvCmplInd == TC_YES
    }
    
    // 'visible' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_424 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.recoveryagent), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on InputSetRef (id=RecoveryAddress) at VehicleIncidentDV.pcf: line 669, column 143
    function visible_449 () : java.lang.Boolean {
      return VehicleIncident.VehStolenInd and (VehicleIncident.RecovCondType != null and VehicleIncident.RecovCondType != TC_NOT_RECOV)
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_VIN_Input) at VehicleIncidentDV.pcf: line 143, column 155
    function visible_73 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style != TC_BOAT and VehicleIncident.Vehicle.Style != TC_ATV and VehicleIncident.Vehicle.Style != TC_SNOWMOBILE
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_SerialNumber_Input) at VehicleIncidentDV.pcf: line 155, column 153
    function visible_84 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style == TC_BOAT or VehicleIncident.Vehicle.Style == TC_ATV or VehicleIncident.Vehicle.Style == TC_SNOWMOBILE
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    property get VehicleIncident () : VehicleIncident {
      return getRequireValue("VehicleIncident", 0) as VehicleIncident
    }
    
    property set VehicleIncident ($arg :  VehicleIncident) {
      setRequireValue("VehicleIncident", 0, $arg)
    }
    
    property get addressOwner () : gw.api.address.CCAddressOwner {
      return getVariableValue("addressOwner", 0) as gw.api.address.CCAddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.CCAddressOwner) {
      setVariableValue("addressOwner", 0, $arg)
    }
    
    property get appraisalIncidentCode () : String {
      return getVariableValue("appraisalIncidentCode", 0) as String
    }
    
    property set appraisalIncidentCode ($arg :  String) {
      setVariableValue("appraisalIncidentCode", 0, $arg)
    }
    
    property get otherServiceRequests () : java.util.Set<ServiceRequest> {
      return getVariableValue("otherServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set otherServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setVariableValue("otherServiceRequests", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    
    function findServiceRequest(serviceCode : String) : ServiceRequest {
      return VehicleIncident.ServiceRequests.firstWhere(\ sr ->
          sr.Instruction.Services.Count == 1
              and sr.Instruction.Services.single().Service.Code == serviceCode
              and (otherServiceRequests == null or not otherServiceRequests.contains(sr))
      )
    }
    
    property get PropertyAppraisalServiceRequest() : ServiceRequest {
      return findServiceRequest(appraisalIncidentCode)
    }
    
    property get RentalServiceRequest() : ServiceRequest {
      return findServiceRequest(gw.vendormanagement.SpecialistServiceCodeConstants.AUTORENTAL)
    }
    
    function createOtherServiceRequests() :  Set<ServiceRequest> {
      return VehicleIncident.ServiceRequests.where(\sr -> sr != PropertyAppraisalServiceRequest and sr != RentalServiceRequest).toSet()
    }
    
    function areAllOtherRequestsEditable() : boolean {
      return otherServiceRequests.allMatch( \ sr -> sr.IsEditableInUI)
    }
    
    
  }
  
  
}